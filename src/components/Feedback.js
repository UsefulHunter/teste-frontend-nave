import React, { useState, useImperativeHandle, forwardRef } from "react"
import styled from "styled-components"
import CloseSVG from "./CloseSVG"
import { navigate } from "gatsby"

const FeedbackWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const FeedbackBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`

const FeedbackBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20%;
  width: 47%;
  max-width: 100%;
  background-color: white;
  z-index: 103;
  padding: 32px 0px 32px 32px;

  display: flex;
  flex-direction: column;
`

const CloseIcon = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 104;
  cursor: pointer;
`

const Feedback = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      openFeedback: () => open(),
      close: () => close(),
    }
  })

  const open = () => {
    setDisplay(true)
  }

  const close = () => {
    setDisplay(false)
    navigate("/Home")
  }

  if (display) {
    return (
      <FeedbackWrapper>
        <FeedbackBackdrop onClick={close} />
        <FeedbackBox>
          <CloseIcon onClick={close}>
            <CloseSVG />
          </CloseIcon>
          {props.children}
        </FeedbackBox>
      </FeedbackWrapper>
    )
  }
  return null
})

export default Feedback
