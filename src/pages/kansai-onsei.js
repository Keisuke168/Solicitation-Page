import * as React from "react"
import SEO from "../components/seo"
import "../components/layout.css"
import Movie from "../images/video.mp4"
import Layout from "../components/layout"


// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: 0,
  padding: 0,
}

// markup
const KansaiOnsei = () => {
  return (
    <main style={pageStyles}>
        <Layout>
            <SEO/>
            <div className="video">
                <video autoPlay muted loop playsInline>
                            <source src={Movie} type="video/mp4" />
                </video>
            </div>
            <div className="hero">
      
                <div className="catch">
                    <h1>
                       第55回 関西合同音声ゼミ<br/>神戸大学
                    </h1>
                </div>
            
            </div>
        </Layout>

    </main>
  )
}

export default KansaiOnsei
