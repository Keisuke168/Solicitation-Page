import * as React from "react"
import styled from '@emotion/styled'

const Wrapper = styled.div`
    display: flex;
    padding: 20px 180px;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
    }
`

const Research = () => {
    return(
        <Wrapper>
            <div>aaa</div>
            <div>bbb</div>
        </Wrapper>
    )
}

export default Research;