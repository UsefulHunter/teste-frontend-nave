import React, { useState, useImperativeHandle, forwardRef } from "react"
import CloseSVG from "./CloseSVG"
import { Wrapper, Backdrop, ModalBox, CloseIcon } from "./Modal.style"

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
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
        <ModalBox>
          <CloseIcon onClick={close}>
            <CloseSVG />
          </CloseIcon>
          {props.children}
        </ModalBox>
      </Wrapper>
    )
  }
  return null
})

export default Modal
