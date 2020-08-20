import React from "react"
import NaveSVG from "./NaveSVG"
import styled from "styled-components"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Nave = styled.div`
  max-height: 40px;
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
  margin-right: 32px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Nave>
        <NaveSVG />
      </Nave>
      <Logout>Sair</Logout>
    </HeaderContainer>
  )
}

export default Header
