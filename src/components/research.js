import * as React from "react"
import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
    display: flex;
    padding: 20px 180px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
    }
`
const Text = styled.div`
    color: rgb(102, 102, 102);
    flex-basis: 50%;
    font-size: 18px;
`

const Title = styled.p`
    text-align: center;
    color: rgb(102, 102, 102);
    font-size: 30px;
`

const Slide = styled.div`
    flex-basis: 25%;
    padding: 20px;
`

const Research = ({children}) => {
    return(
        <></>
    )
}

export default Research;