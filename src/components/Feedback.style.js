import styled from "styled-components"
import { colors } from "../utils/Colors"
export const FeedbackBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20%;
  width: 47%;
  max-width: 100%;
  background-color: ${colors.white};
  z-index: 103;
  padding: 32px 0px 32px 32px;

  display: flex;
  flex-direction: column;
`
