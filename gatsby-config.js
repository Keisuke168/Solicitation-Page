module.exports = {
  siteMetadata: {
    title: `CS17滝口研究室`,
    description: `CS17滝口研究室`,
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