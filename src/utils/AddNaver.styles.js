import styled from "styled-components"
import { colors } from "./Colors"
export const NaverContainer = styled.div`
  padding: 24px 32px 32px 32px;
`
export const Text = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 32px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
  }
`
export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${colors.mediumBlack};
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
    width: 100%;
  }
`
export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    margin-left: 0;
  }
`
export const FormButton = styled.button`
  background-color: ${colors.mediumBlack};
  color: ${colors.white};
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  height: 40px;
  padding: 8px 16px;
  width: 30%;
  margin-left: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Icon = styled.div`
  margin-right: 16px;
  cursor: pointer;
`
