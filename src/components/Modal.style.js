import styled from "styled-components"
import { colors } from "../utils/Colors"
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`
export const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  width: 78%;
  max-width: 100%;
  overflow-y: auto;
  background-color: ${colors.white};
  z-index: 101;
`
export const CloseIcon = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 102;
  cursor: pointer;
`
