import React from "react"
import { InputField } from "./Input.style"

const Input = props => (
  <InputField
    placeholder={props.placeholder}
    onChange={props.onChange}
    name={props.name}
    value={props.value}
    type={props.type}
    disabled={props.disabled}
    required
  />
)

export default Input
