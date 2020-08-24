import React from "react"
import styled from "styled-components"

const LabelInput = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #212121;
`

const Label = props => <LabelInput>{props.value}</LabelInput>

export default Label
