import * as React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Contents from "../components/contents"
import Research from "../components/research"
import SEO from "../components/seo"
import "../components/layout.css"


// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: 0,
  padding: 0,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      {/* <SEO> */}
        <Header/>
        <Hero/>
        <Contents/>
      {/* </SEO> */}
    </main>
  )
}

export default IndexPage
