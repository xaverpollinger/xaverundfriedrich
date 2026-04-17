const Image      = require("@11ty/eleventy-img");
const fs         = require("fs");
const markdownIt = require("markdown-it");
const md         = markdownIt({ html: false, breaks: true });

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

  // md-Filter: rendert Markdown-Strings aus Frontmatter-Feldern zu HTML
  eleventyConfig.addFilter("md", (content) => md.render(content || ""));

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

  // Projekte-Collection: alle Artikel mit typ: projekt,
  // nach Jahr absteigend sortiert (neueste zuerst).
  eleventyConfig.addCollection("projekte", (api) =>
    api
      .getFilteredByGlob("src/artikel/*.md")
      .filter((item) => item.data.typ === "projekt" && !item.data.draft)
      .sort((a, b) => (b.data.year ?? 0) - (a.data.year ?? 0))
  );

  // Blog-Collection: alle Artikel mit typ: blog,
  // nach Datum absteigend sortiert (neueste zuerst).
  eleventyConfig.addCollection("blog", (api) =>
    api
      .getFilteredByGlob("src/artikel/*.md")
      .filter((item) => item.data.typ === "blog" && !item.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  // ---------------------------------------------------------------------------
  // Shortcode Transform: ersetzt [xf:...]-Blöcke im body durch HTML-Komponenten.
  // Läuft einmalig beim Build auf dem fertigen HTML-Output — kein Runtime-Overhead.
  //
  // Verfügbare Shortcodes:
  //   [xf:video url="https://youtube-nocookie.com/embed/ID"]
  //   [xf:slider bilder="ordner/bild1.webp, ordner/bild2.webp"]
  //   [xf:bild src="ordner/bild.webp" alt="Beschreibung"]
  //   [xf:bild-duo links="ordner/a.webp" rechts="ordner/b.webp"]
  //   [xf:callout text="Kernaussage oder Zitat"]
  // ---------------------------------------------------------------------------
  eleventyConfig.addTransform("xf-shortcodes", function (content, outputPath) {
    if (typeof outputPath !== "string" || !outputPath.endsWith(".html")) return content;

    // Pre-Processing: markdown-it encodiert " zu &quot; in Absätzen.
    // Alle Shortcode-Muster innerhalb von <p>[xf:...]</p> vorab dekodieren,
    // damit die nachfolgenden Regexes mit echten Anführungszeichen arbeiten.
    content = content.replace(
      /<p>\s*(\[xf:[^\]]+\])\s*<\/p>/g,
      (match, shortcode) =>
        `<p>${shortcode.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}</p>`
    );

    // --- [xf:video] ----------------------------------------------------------
    // Rendert einen DSGVO-konformen YouTube 2-Klick-Consent-Block.
    // Markdown schreibt: <p>[xf:video url="..."]</p>
    content = content.replace(
      /<p>\s*\[xf:video\s+url="([^"]+)"\]\s*<\/p>/g,
      (_, url) => `
<div class="xf-video xf-block">
  <div class="xf-video__ratio">
    <button class="xf-video__consent" data-src="${url}" aria-label="Video laden">
      <span class="xf-video__play">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="1.5"/>
          <polygon points="10,8 10,16 17,12" fill="currentColor"/>
        </svg>
      </span>
      <span class="xf-video__label">Durch Ihren Klick erklären Sie sich damit einverstanden, dass eine Verbindung zu YouTube (Google) aufgebaut wird und dabei personenbezogene Daten auch in die USA fließen können. Mehr Infos in unserer <a href="/datenschutz/" class="xf-video__privacy-link" onclick="event.stopPropagation()">Datenschutzerklärung</a>.</span>
    </button>
  </div>
</div>`
    );

    // --- [xf:slider] ---------------------------------------------------------
    // Bildslider mit Linien-Indikator und optionaler Bildunterschrift.
    // Syntax:  [xf:slider bilder="a.webp, b.webp" caption="Beschreibung"]
    content = content.replace(
      /<p>\s*\[xf:slider([^\]]*)\]\s*<\/p>/g,
      (_, attrsRaw) => {
        const attrs = {};
        attrsRaw.replace(/(\w+)="([^"]*)"/g, (m, key, val) => { attrs[key] = val; });
        const bilder = (attrs.bilder || "").split(",").map((b) => b.trim()).filter(Boolean);
        if (!bilder.length) return "";
        const slides = bilder
          .map((b) => `      <div class="xf-slider__slide"><img src="/assets/images/${b}" alt="" loading="lazy" decoding="async"></div>`)
          .join("\n");
        const indicators = bilder
          .map((_, i) => `      <button class="xf-slider__indicator${i === 0 ? " is-active" : ""}" aria-label="Bild ${i + 1}"></button>`)
          .join("\n");
        const captionHtml = attrs.caption
          ? `\n  <p class="xf-slider__caption">${attrs.caption}</p>`
          : "";
        const aspectStyle = attrs.aspect
          ? ` style="--slide-aspect: ${attrs.aspect}"`
          : "";
        return `
<div class="xf-slider xf-block" data-slider${aspectStyle}>
  <div class="xf-slider__viewport">
    <div class="xf-slider__track">
${slides}
    </div>
    <button class="xf-slider__arrow xf-slider__arrow--prev" aria-label="Vorheriges Bild">&#8592;</button>
    <button class="xf-slider__arrow xf-slider__arrow--next" aria-label="Nächstes Bild">&#8594;</button>
  </div>
  <div class="xf-slider__indicators">
${indicators}
  </div>${captionHtml}
</div>`;
      }
    );

    // --- [xf:bild] -----------------------------------------------------------
    // Einzelbild, volle Breite. Pfad relativ zu /assets/images/.
    // Optional: caption="..." für Bildunterschrift
    // Syntax:  [xf:bild src="ordner/bild.webp" alt="..." caption="..."]
    content = content.replace(
      /<p>\s*\[xf:bild([^\]]*)\]\s*<\/p>/g,
      (_, attrsRaw) => {
        const attrs = {};
        attrsRaw.replace(/(\w+)="([^"]*)"/g, (m, key, val) => { attrs[key] = val; });
        const captionHtml = attrs.caption
          ? `\n  <figcaption class="xf-bild__caption">${attrs.caption}</figcaption>`
          : "";
        return `<figure class="xf-bild xf-block"><img src="/assets/images/${attrs.src}" alt="${attrs.alt || ""}" loading="lazy" decoding="async">${captionHtml}</figure>`;
      }
    );

    // --- [xf:bild-duo] -------------------------------------------------------
    // Zwei Bilder nebeneinander. Pfade relativ zu /assets/images/.
    content = content.replace(
      /<p>\s*\[xf:bild-duo\s+links="([^"]+)"\s+rechts="([^"]+)"\]\s*<\/p>/g,
      (_, links, rechts) => `
<div class="xf-bild-duo xf-block">
  <figure class="xf-bild-duo__item"><img src="/assets/images/${links}" alt="" loading="lazy" decoding="async"></figure>
  <figure class="xf-bild-duo__item"><img src="/assets/images/${rechts}" alt="" loading="lazy" decoding="async"></figure>
</div>`
    );

    // --- [xf:callout] --------------------------------------------------------
    // Hervorgehobene Textbox / Zitat.
    content = content.replace(
      /<p>\s*\[xf:callout\s+text="([^"]+)"\]\s*<\/p>/g,
      (_, text) => `<blockquote class="xf-callout xf-block">${text}</blockquote>`
    );

    // --- [xf:text-bild-a] / [xf:text-bild-b] -----------------------------------
    // Zwei-Spalten-Layout: Text + Bild.
    //   A = Text links, Bild rechts
    //   B = Bild links, Text rechts
    // Syntax:  [xf:text-bild-a bild="ordner/bild.webp" h="2" headline="..." text="..."]
    //   h="1"–"6" → Headline-Level (default: 2)
    content = content.replace(
      /<p>\s*\[xf:text-bild-(a|b)([^\]]*)\]\s*<\/p>/g,
      (_, variant, attrsRaw) => {
        const attrs = {};
        attrsRaw.replace(/(\w+)="([^"]*)"/g, (m, key, val) => { attrs[key] = val; });
        const modifier = variant === "b" ? " xf-text-bild--reverse" : "";
        const level = Math.min(6, Math.max(1, parseInt(attrs.h || "2", 10)));
        const tag = `h${level}`;
        const headlineHtml = attrs.headline ? `<${tag}>${attrs.headline}</${tag}>` : "";
        const textHtml = attrs.text ? `<p>${attrs.text}</p>` : "";
        const alt = attrs.alt || "";
        return `
<div class="xf-text-bild xf-block${modifier}">
  <div class="xf-text-bild__text">
    ${headlineHtml}
    ${textHtml}
  </div>
  <div class="xf-text-bild__media">
    <img src="/assets/images/${attrs.bild}" alt="${alt}" loading="lazy" decoding="async">
  </div>
</div>`;
      }
    );

    // --- [xf:link] ------------------------------------------------------------
    // Highlight-Link: Beschreibungstext + Linie + Button.
    // Syntax:  [xf:link url="https://..." label="Button-Text" text="Beschreibung" h="3"]
    //   h="1"–"6" → Typo-Stufe für den Text (default: 3 = p-m-bold)
    content = content.replace(
      /<p>\s*\[xf:link([^\]]*)\]\s*<\/p>/g,
      (_, attrsRaw) => {
        const attrs = {};
        attrsRaw.replace(/(\w+)="([^"]*)"/g, (m, key, val) => { attrs[key] = val; });
        const url = attrs.url || "#";
        const label = attrs.label || "Link";
        const text = attrs.text || "";
        return `
<div class="xf-link xf-block">
  <span class="xf-link__text">${text}</span>
  <span class="xf-link__line"></span>
  <a href="${url}" class="xf-link__button" target="_blank" rel="noopener">${label}</a>
</div>`;
      }
    );

    // --- [xf:heading] --------------------------------------------------------
    // Eyebrow-Label klein + Hauptüberschrift groß darunter.
    // Ersetzt das "## Label: Beschreibung"-Muster durch ein zweistufiges Layout.
    // Syntax:  [xf:heading label="Research & Synthese" title="Methoden zur Strategie-Findung"]
    //          [xf:heading h="3" label="..." title="..."]
    content = content.replace(
      /<p>\s*\[xf:heading([^\]]*)\]\s*<\/p>/g,
      (_, attrsRaw) => {
        const attrs = {};
        attrsRaw.replace(/(\w+)="([^"]*)"/g, (m, key, val) => { attrs[key] = val; });
        const level = Math.min(6, Math.max(1, parseInt(attrs.h || "2", 10)));
        const tag = `h${level}`;
        return `
<div class="xf-heading xf-block">
  <span class="xf-heading__label">${attrs.label || ""}</span>
  <${tag} class="xf-heading__title">${attrs.title || ""}</${tag}>
</div>`;
      }
    );

    // --- [xf:summary] --------------------------------------------------------
    // Tab-Navigation: Aufgabe / Idee / Prozess / Ergebnis
    // Alle Felder optional — nur Tabs mit Inhalt werden gerendert.
    //
    // Syntax:
    //   [xf:summary aufgabe="..." idee="..." prozess="..." ergebnis="..."]
    //
    // Felder können weggelassen werden. Reihenfolge ist fix: Aufgabe → Idee →
    // Prozess → Ergebnis. Inhalte dürfen keine doppelten Anführungszeichen enthalten.
    content = content.replace(
      /<p>\s*\[xf:summary([^\]]+)\]\s*<\/p>/g,
      (_, attrsRaw) => {
        // Key-Value-Paare aus dem Attributstring parsen
        const data = {};
        attrsRaw.replace(/(\w+)="([^"]*)"/g, (m, key, val) => {
          data[key] = val.trim();
        });

        // Nur definierte, nicht-leere Felder rendern
        const felder = [
          { key: "aufgabe",  label: "Aufgabe"  },
          { key: "idee",     label: "Idee"     },
          { key: "prozess",  label: "Prozess"  },
          { key: "ergebnis", label: "Ergebnis" },
        ].filter((f) => data[f.key]);

        if (!felder.length) return "";

        const tabs = felder
          .map((f, i) =>
            `      <button class="xf-summary__tab${i === 0 ? " is-active" : ""}" data-key="${f.key}"><span class="xf-summary__tab-inner">${f.label}</span></button>`
          )
          .join("\n");

        const panels = felder
          .map((f, i) =>
            `    <div class="xf-summary__panel" data-key="${f.key}"${i > 0 ? " hidden" : ""}><p>${data[f.key]}</p></div>`
          )
          .join("\n");

        return `
<div class="xf-summary xf-block" data-summary>
  <div class="xf-summary__track-wrap">
    <nav class="xf-summary__track" aria-label="Projektübersicht">
${tabs}
    </nav>
  </div>
  <div class="xf-summary__panels">
${panels}
  </div>
</div>`;
      }
    );

    return content;
  });

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
