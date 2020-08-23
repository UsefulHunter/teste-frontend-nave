import React, { useState, useImperativeHandle, forwardRef } from "react"
import styled from "styled-components"

const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const DialogBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`

const DialogBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 23%;
  width: 47%;
  max-width: 600px;
  background-color: white;
  z-index: 101;
  display: flex;
  flex-direction: column;
  padding: 32px;
`

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
      <DialogWrapper>
        <DialogBackdrop onClick={close} />
        <DialogBox>{props.children}</DialogBox>
      </DialogWrapper>
    )
  }
  return null
})

export default Dialog
