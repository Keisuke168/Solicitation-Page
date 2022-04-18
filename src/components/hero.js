import * as React from "react"
import styled from '@emotion/styled'

const Title = styled.p`
    color: rgb(102, 102, 102);
    text-align: center;
    font-size: 38px;
    border-bottom: 4px solid #66a5b3;
    padding-bottom: 1rem;

`

const Large = styled.span`
    font-size: 52px;
`

const Entry = styled.div`
    color: rgb(102, 102, 102);
    font-size: 24px;
    padding: 0 2rem;
`

const Wrapper = styled.div`
    padding: 20px 96px;
`

const Hero = () => {
    return(
        <Wrapper>
            <Title>
                <Large>当</Large>研究室（大学院進学）を<Large>希</Large>望する<Large>皆</Large>さんへ
            </Title>
            <Entry>
            本研究室では，音声，対話，自然言語，脳科学，コンピュータビジョンに関する研究をしています．
            研究室で行われているプロジェクトを以下に紹介していますので，ご確認ください．
            他にも多くのプロジェクトがありますし，毎年新しいプロジェクトも始まります．興味のあるテーマがありましたら，一緒に挑戦しましょう．
            いつでも研究室見学（受験生向け）
            見学希望の方は，takigu@kobe-u.ac.jp まで連絡ください． 
            </Entry>
        </Wrapper>
    )
}

export default Hero;