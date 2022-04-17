import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

const Wrapper = styled.div`
  background-color: rgb(0, 45, 90);
`

const Content = styled.div`
  margin: 0 150px;
  padding: 0 15px;
  color: white;
  font-size: 30px;
  font-weight: 400;
`

const Large = styled.span`
    font-size: 40px;
`



const Header =  () => (
  <Wrapper>
    <Content>
      <Large>M</Large>EDIA <Large>I</Large>NFORMATICS <Large>L</Large>AB.
    </Content>
  </Wrapper>
)

export default Header