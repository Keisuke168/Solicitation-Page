import * as React from "react"
import SEO from "../components/seo"
import "../components/layout.css"
import Movie from "../images/kobe.mp4"
import Layout from "../components/layout"
import styled from '@emotion/styled'

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: 0,
  padding: 0,
}


const Title = styled.p`
    color: rgb(102, 102, 102);
    width: 80%;
    margin: 5% auto;
    text-align: center;
    font-size: 38px;
    border-bottom: 4px solid #66a5b3;
    padding-bottom: 1rem;
    @media (max-width: 768px) {
        font-size: 18px;
    }

`

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

            <Title>
                ▼全体プログラム
            </Title>

            <table border='1'>
                <tr bgcolor='gray'>
                    <th>開始時刻</th>
                    <th>終了時刻</th>
                    <th>内容</th>
                </tr>
                <tr>
                    <th>12:30</th>
                    <th>---</th>
                    <th>受付開始</th>
                </tr>
                <tr>
                    <th>13:00</th>
                    <th>13:50</th>
                    <th>ポスターセッション（第１セッション）</th>
                </tr>
                <tr>
                    <th>14:00</th>
                    <th>14:50</th>
                    <th>ポスターセッション（第２セッション）</th>
                </tr>
                <tr>
                    <th>15:00</th>
                    <th>15:50</th>
                    <th>ポスターセッション（第３セッション）</th>
                </tr>
                <tr>
                    <th>16:00</th>
                    <th>16:50</th>
                    <th>ポスターセッション（第４セッション）</th>
                </tr>
                
            </table>
        </Layout>

    </main>
  )
}

export default KansaiOnsei
