import React from "react"
import NaveSVGSmall from "./NaveSVGSmall"
import styled from "styled-components"
import { navigate } from "gatsby"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

const Nave = styled.div`
  padding-top: 24px;
`

const Logout = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #000;
  padding-top: 24px;
  cursor: pointer;
`

const Header = () => {
  const handleClick = () => {
    navigate("/")
  }

  return (
    <HeaderContainer>
      <Nave>
        <NaveSVGSmall />
      </Nave>
      <Logout onClick={handleClick}>Sair</Logout>
    </HeaderContainer>
  )
}

export default Header
