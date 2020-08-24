import styled from "styled-components"
import { colors } from "../utils/Colors"
export const DialogBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 23%;
  width: 47%;
  max-width: 600px;
  background-color: ${colors.white};
  z-index: 101;
  display: flex;
  flex-direction: column;
  padding: 32px;
`
