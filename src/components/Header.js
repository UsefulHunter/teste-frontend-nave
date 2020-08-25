import React from "react"
import NaveSVGSmall from "./NaveSVGSmall"
import { navigate } from "gatsby"
import { HeaderContainer, Nave, Logout } from "./Header.style"

const Header = () => (
  <HeaderContainer>
    <Nave
      onClick={() => {
        navigate("/Home")
      }}
    >
      <NaveSVGSmall />
    </Nave>
    <Logout
      onClick={() => {
        navigate("/")
      }}
    >
      Sair
    </Logout>
  </HeaderContainer>
)

export default Header
