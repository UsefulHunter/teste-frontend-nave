import styled from "styled-components"
import { colors } from "./Colors"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 32px;
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    margin-top: 0;
  }
`
export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  color: ${colors.mediumBlack};

  @media (max-width: 768px) {
    font-size: 58px;
  }
`
export const Button = styled.button`
  background-color: ${colors.mediumBlack};
  color: ${colors.white};
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  height: 40px;
  padding: 8px 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ItemArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 32px;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`
