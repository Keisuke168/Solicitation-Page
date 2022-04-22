import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import './header.css'

const Wrapper = styled.div`
  background-color: rgb(0, 45, 90);
`

const Content = styled.div`
  margin: 0 150px;
  padding: 15px 15px;
  color: white;
  font-size: 30px;
  font-weight: 200;
  font-family: "Helvetica Neue",
  border-bottom: 4px solid #66a5b3;

  @media(max-width: 768px){
    margin: 0 10px;
    text-align : center;
  }
`

const Large = styled.span`
    font-size: 40px;

    @media(max-width: 768px){
      font-size: 25px;
    }
`

const P = styled.p`
  width: fit-content;
  border-bottom: 0.5px solid white;
  padding-bottom: 2px;
  margin: 0;

  @media(max-width: 768px){
    font-size: 20px;
    text-align : center;
    margin: auto;
  }
`

const Univ = styled.p`
  font-size: 16px;
  margin: 0;
  top:0;
`

const Header =  () => (
  <Wrapper>
    <Content>
      <P><Large>CS17</Large>  <Large>M</Large>EDIA <Large>I</Large>NFORMATICS <Large>L</Large>AB.</P>
      <Univ>university of kobe</Univ>
    </Content>
    <div class="navigation">
  <ul>
    <li class="button">
      <p><a href="http://www.me.cs.scitec.kobe-u.ac.jp/members.html">Members</a></p>
    </li>
    <li class="button">
      <p><a href="http://www.me.cs.scitec.kobe-u.ac.jp/~takigu/publications.html">Publications</a></p>
    </li>
    <li class="button">
      <p><a href="http://www.me.cs.scitec.kobe-u.ac.jp/award.html">Award</a></p>
    </li>
    <li class="button">
      <p><a href="http://www.me.cs.scitec.kobe-u.ac.jp/research.html">Research</a></p>
    </li>
    <li class="button">
      <p><a href="http://www.me.cs.scitec.kobe-u.ac.jp/contact.html">Contct</a></p>
    </li>
  </ul>
</div>
  </Wrapper>
)

export default Header