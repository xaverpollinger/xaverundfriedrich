module.exports = {
  eleventyComputed: {
    // Layout automatisch nach typ setzen
    layout: (data) => {
      if (data.typ === "projekt") return "projekt.njk";
      if (data.typ === "blog") return "blog.njk";
      return "base.njk";
    },

    // Permalink automatisch nach typ setzen
    // Projekte → /projekte/slug/
    // Blog     → /blog/slug/
    // Entwürfe (draft: true) → kein Build, keine URL
    permalink: (data) => {
      if (data.draft === true) return false;
      const slug = data.page.fileSlug;
      if (data.typ === "projekt") return `/projekte/${slug}/`;
      if (data.typ === "blog") return `/blog/${slug}/`;
      return `/${slug}/`;
    },

    // Entwürfe aus allen Collections ausschließen
    eleventyExcludeFromCollections: (data) => data.draft === true,
  },
};
