const Image = require("@11ty/eleventy-img");

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
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("public");

  // Bild-Shortcode registrieren (async!)
  eleventyConfig.addAsyncShortcode("image", imageShortcode);

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
