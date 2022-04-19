module.exports = {
  siteMetadata: {
    title: `CS17オープンラボ特設サイト`,
    description: `2022年滝口研究室のオープンラボ特設サイト`,
    lang: `ja`,
    siteUrl: `https://********.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
     "gatsby-plugin-react-helmet", 
     "gatsby-plugin-mdx", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
]
};