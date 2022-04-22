import * as React from "react"
import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
    display: flex;
    padding: 30px 180px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media (max-width: 768px){
        flex-direction: column;
        padding: 20px 52px;
    }
`

const WrapperR = styled.div`
    display: flex;
    padding: 30px 180px;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    @media (max-width: 768px){
        flex-direction: column;
        padding: 20px 52px;
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
    @media (max-width: 768px){
        padding: 40px;
    }
`



const Contents = () => {
    return(
        <div>
            <Wrapper>
                <Text>
                    <Title>test</Title>
                    Early brain development sets the stage for a lifetime of learning. At I-LABS, our brain imaging center gives us a front row seat. We are able to see first-hand how our earliest experiences shape this process. From the power of social interactions, to the sense of touch, our work reveals how the brain grows and learns.
                </Text> 
                <Slide>
                    <StaticImage src='../images/icon.png'/>
                </Slide>
            </Wrapper>

            <WrapperR>
                <Text>
                    <Title>test</Title>
                    Early brain development sets the stage for a lifetime of learning. At I-LABS, our brain imaging center gives us a front row seat. We are able to see first-hand how our earliest experiences shape this process. From the power of social interactions, to the sense of touch, our work reveals how the brain grows and learns.
                </Text> 
                <Slide>
                    <StaticImage src='../images/icon.png'/>
                </Slide>
            </WrapperR>

            <Wrapper>
                <Text>
                    <Title>test</Title>
                    Early brain development sets the stage for a lifetime of learning. At I-LABS, our brain imaging center gives us a front row seat. We are able to see first-hand how our earliest experiences shape this process. From the power of social interactions, to the sense of touch, our work reveals how the brain grows and learns.
                </Text> 
                <Slide>
                    <StaticImage src='../images/icon.png'/>
                </Slide>
            </Wrapper>

            <WrapperR>
                <Text>
                    <Title>test</Title>
                    Early brain development sets the stage for a lifetime of learning. At I-LABS, our brain imaging center gives us a front row seat. We are able to see first-hand how our earliest experiences shape this process. From the power of social interactions, to the sense of touch, our work reveals how the brain grows and learns.
                </Text> 
                <Slide>
                    <StaticImage src='../images/icon.png'/>
                </Slide>
            </WrapperR>
        </div>
    )
}

export default Contents;