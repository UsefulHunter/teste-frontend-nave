import styled from "styled-components"
import { colors } from "../utils/Colors"
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;

  ::last-child {
    flex-grow: 10;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`
export const ItemImg = styled.img`
  object-fit: none;
  object-position: center;
  height: 350px;
  width: 350px;
`

export const ItemTitle = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.mediumBlack};
`

export const ItemSubtitle = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.mediumBlack};
  margin-top: 24px;
  margin-bottom: 10px;
`

export const ItemText = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`

export const ItemIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
`

export const ModalIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
  margin-top: auto;
`

export const Icon = styled.div`
  margin-right: 16px;
  cursor: pointer;
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const ModalImage = styled.img`
  width: 50%;
`
export const ModalInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 32px 0 28px 30px;
`
export const ModalTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: auto;
`

export const DialogButtonPrimary = styled.button`
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
`

export const DialogButtonSecondary = styled.button`
  background-color: ${colors.white};
  color: #212121;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  height: 40px;
  padding: 8px 16px;
  box-shadow: none;
  border: 1px solid #212121;
  margin-right: 24px;
  padding: 8px 16px;
  width: 30%;
`
