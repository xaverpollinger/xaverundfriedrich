const Image = require("@11ty/eleventy-img");
const fs    = require("fs");

// Bild-Shortcode: wandelt jedes Bild beim Build in AVIF + WebP + JPEG um
// und erzeugt automatisch ein responsives <picture>-Tag.
// Verwendung in Templates: {% image "src/assets/images/foto.jpg", "Alt-Text", "(min-width: 800px) 600px, 100vw" %}
async function imageShortcode(src, alt, sizes = "100vw") {
  const metadata = await Image(src, {
    widths: [600, 1200, 1800],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./_site/assets/images/",
    urlPath: "/assets/images/",
    sharpOptions: { animated: true },
  });
  return Image.generateHTML(metadata, {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  });
}

module.exports = function (eleventyConfig) {
  // Static assets werden 1:1 in _site/ kopiert
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy({ "src/.htaccess": ".htaccess" });

  // CSS beim Build inline einbetten — eliminiert render-blocking stylesheet.
  // Reihenfolge ist wichtig: Tokens müssen vor Base stehen, etc.
  eleventyConfig.addShortcode("inlineCSS", () => {
    const files = [
      "src/css/tokens.css",
      "src/css/base.css",
      "src/css/layout.css",
      "src/css/projekte.css",
      "src/css/blog.css",
      "src/css/cursor.css",
      "src/css/about.css",
      "src/css/home.css",
      "src/css/animations.css",
    ];
    const css = files.map((f) => fs.readFileSync(f, "utf-8")).join("\n");
    // Minifizierung: Kommentare entfernen, Whitespace zusammenfassen
    return css
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .trim();
  });

  // Bild-Shortcode registrieren (async!)
  eleventyConfig.addAsyncShortcode("image", imageShortcode);

  // toSrcPath-Filter: konvertiert öffentliche Bildpfade in Quellpfade für
  // das Eleventy Image Plugin.
  // "/assets/images/foo.jpg" → "src/assets/images/foo.jpg"
  eleventyConfig.addFilter("toSrcPath", (url) => {
    if (!url) return url;
    if (url.startsWith("/")) return "src" + url;
    return url;
  });

  // parentUrl-Filter: berechnet die übergeordnete URL für den Zurück-Pfeil.
  // "/"              → null        (Home hat keine Eltern-Seite)
  // "/projekte/"     → "/"
  // "/projekte/foo/" → "/projekte/"
  eleventyConfig.addFilter("parentUrl", (url) => {
    if (!url || url === "/") return null;
    const parts = url.split("/").filter((p) => p.length > 0);
    if (parts.length <= 1) return "/";
    parts.pop();
    return "/" + parts.join("/") + "/";
  });

  // Projekte-Collection: alle Markdown-Dateien in src/projekte/,
  // nach Jahr absteigend sortiert (neueste zuerst).
  eleventyConfig.addCollection("projekte", (api) =>
    api
      .getFilteredByGlob("src/projekte/*.md")
      .sort((a, b) => (b.data.year ?? 0) - (a.data.year ?? 0))
  );

  // Blog-Collection: alle Markdown-Dateien in src/blog/,
  // nach Datum absteigend sortiert (neueste zuerst).
  eleventyConfig.addCollection("blog", (api) =>
    api
      .getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => b.date - a.date)
  );

  // Datum lesbar: 8. April 2026
  eleventyConfig.addFilter("dateReadable", (date) =>
    new Date(date).toLocaleDateString("de-DE", {
      year: "numeric", month: "long", day: "numeric",
    })
  );

  // Datum ISO 8601 für RSS und <time datetime="">
  eleventyConfig.addFilter("dateISO", (date) =>
    new Date(date).toISOString()
  );

  // Datum RFC 822 für RSS <pubDate>
  eleventyConfig.addFilter("dateRFC822", (date) =>
    new Date(date).toUTCString()
  );

  // Datumsfilter für Footer-Copyright: {{ '' | date('yyyy') }} → "2026"
  eleventyConfig.addFilter("date", (value, format) => {
    const d = value ? new Date(value) : new Date();
    if (format === "yyyy") return d.getFullYear().toString();
    return d.toISOString();
  });

  return {
    dir: {
      input: "src",       // Quelldateien
      output: "_site",    // Build-Output
      layouts: "_layouts",
      includes: "_includes",
      data: "_data",
    },
    // Alle Templates können Nunjucks-Syntax verwenden
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
