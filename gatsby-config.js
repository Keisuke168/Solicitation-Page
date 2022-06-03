module.exports = {
  siteMetadata: {
    title: `関西合同音声ゼミ Kansai Joint Speech Seminar`,
    description: `関西合同音声ゼミ Kansai Joint Speech Seminar`,
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