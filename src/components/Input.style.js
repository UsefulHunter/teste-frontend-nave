import styled from "styled-components"
import { colors } from "../utils/Colors"
export const InputField = styled.input`
  border: 1px solid #424242;
  height: 40px;
  width: 280px;
  padding: 8px 0 8px 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.mediumBlack};

  ::invalid {
    border: 1px solid red;
  }
`
