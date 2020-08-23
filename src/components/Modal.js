import React, { useState, useImperativeHandle, forwardRef } from "react"
import styled from "styled-components"
import CloseSVG from "./CloseSVG"

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  width: 78%;
  max-width: 100%;
  overflow-y: auto;
  background-color: white;
  z-index: 101;
`
const CloseIcon = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 102;
  cursor: pointer;
`
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
      <ModalWrapper>
        <ModalBackdrop onClick={close} />
        <ModalBox>
          <CloseIcon onClick={close}>
            <CloseSVG />
          </CloseIcon>
          {props.children}
        </ModalBox>
      </ModalWrapper>
    )
  }
  return null
})

export default Modal
