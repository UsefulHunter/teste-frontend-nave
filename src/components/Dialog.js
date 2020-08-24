import React, { useState, useImperativeHandle, forwardRef } from "react"
import { Wrapper, Backdrop } from "./Modal.style"
import { DialogBox } from "./Dialog.style"

const Dialog = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      openDialog: () => open(),
      close: () => close(),
    }
  })

  const open = () => {
    setDisplay(true)
  }

  const close = () => {
    setDisplay(false)
  }

  if (display) {
    return (
      <Wrapper>
        <Backdrop onClick={close} />
        <DialogBox>{props.children}</DialogBox>
      </Wrapper>
    )
  }
  return null
})

export default Dialog
