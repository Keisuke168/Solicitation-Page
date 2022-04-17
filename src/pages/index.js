import * as React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import SEO from "../components/seo"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      {/* <SEO> */}
        <Header/>
        <Hero/>
      {/* </SEO> */}
    </main>
  )
}

export default IndexPage
