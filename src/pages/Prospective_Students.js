import * as React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Contents from "../components/contents"
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
const ProspectiveStudents = () => {
  return (
    <main style={pageStyles}>
      <SEO/>
      <Header/>
      <Hero/>
      <Contents/>
    </main>
  )
}

export default ProspectiveStudents
