module.exports = function (eleventyConfig) {
  // Static assets werden 1:1 in _site/ kopiert
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("public");

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
