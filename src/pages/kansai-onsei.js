import * as React from "react"
import SEO from "../components/seo"
import "../components/layout.css"
import Movie from "../images/kobe.mp4"
import Layout from "../components/layout"
import styled from '@emotion/styled'
import Img from '../images/at.jpg'
import Money from '../images/money.png'
import Program from "../components/program"
import Labs from "../components/labs"
import Accessmap from "../components/accessmap"

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
    margin: 4% auto;
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

            <ul className="info">
                <li>日時：2022年7月9日（土） </li>
                <li>会場：神戸大学百年記念館 （<a href="https://www.kobe-u.ac.jp/guid/access/rokko/rokkodai-dai2.html">キャンパスマップ</a>）</li>
                <li>住所：〒657-8501<br className='br'/>　兵庫県神戸市灘区六甲台町１−１ </li>
            </ul>

            <Title>
                ▼アクセス
            </Title>
            <div className="access">
                <ul>
                    <li>徒歩<br/>阪急神戸線「六甲」駅から約15〜20分</li> <br/>
                    <li>バス（こちらを推奨します）<br/>阪急神戸線「六甲」駅、JR「六甲道」駅、又は阪神本線「御影」駅から、
市バス 36系統「鶴甲団地」行きに乗車、<br/>「神大文・理・農学部前」もしくは「神大本部・ 工学部前」下車。(阪急六甲駅から約10分、JR六甲道駅から約15分、阪神御影駅から約20分)  </li>

                <p>バス運賃は210円です。</p>
                <a href="https://www.city.kobe.lg.jp/a71810/kurashi/access/kotsukyoku/bus/jikoku/index.html">神戸市バス時刻表</a>
               
                </ul>

                 <br/>
                
                 <Accessmap/>

                <div className="text">
                    <p className="text">学内の生協食堂は、現在、土曜日は閉まっています。<br/>学内のコンビニは営業しています。また駅周辺にはコンビニやお店があります。 </p>
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
                    <th>12:45</th>
                    <th>---</th>
                    <th>受付開始</th>
                </tr>
                <tr>
                    <th>13:15</th>
                    <th>13:25</th>
                    <th>オープニング</th>
                </tr>
                <tr>
                    <th>13:30</th>
                    <th>14:30</th>
                    <th>ポスターセッション（第１セッション）</th>
                </tr>
                <tr>
                    <th>14:40</th>
                    <th>15:40</th>
                    <th>ポスターセッション（第２セッション）</th>
                </tr>
                <tr>
                    <th>15:50</th>
                    <th>16:50</th>
                    <th>ポスターセッション（第３セッション）</th>
                </tr>
                <tr>
                    <th>17:00</th>
                    <th>17:10</th>
                    <th>クロージング</th>
                </tr>
                
            </table>

            <div className='text'>
                <p>
                    ・研究室ごとに発表の概要をA4用紙1枚程度にまとめて参加人数分ご用意の上、受付にご持参ください。 <br/>
                    ・ポスターを貼るパネルのサイズは、縦168cm×横87cmです。 <br/>
                    ・ポスターは、押しピンで固定してください（押しピンは本学で用意いたします）。
                </p>
            </div>



            <Title>
                ▼発表プログラム
            </Title>
            <Program/>

            <Title>
                ▼参加大学・研究室 
            </Title>

            <Labs/>

            
            <Title>
                ▼連絡先
            </Title>
            <div className='mail'>
                <p>神戸大学大学院システム情報学研究科 情報科学専攻 メディア情報研究室<br/>滝口 哲也</p>
                <p>Email：takigu<img src={Img}/>kobe-u.ac.jp </p>
            </div>

            <Title>
                ▼会計報告
            </Title>
            <img className='money' src={Money}/>
        </Layout>

    </main>
  )
}

export default KansaiOnsei
