import styled from "styled-components"
import { colors } from "../utils/Colors"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`
export const Nave = styled.div`
  padding-top: 24px;
  cursor: pointer;
`
export const Logout = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.black};
  padding-top: 24px;
  cursor: pointer;
`
