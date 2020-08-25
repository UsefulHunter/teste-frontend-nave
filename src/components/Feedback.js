import React, { useState, useImperativeHandle, forwardRef } from "react"
import { navigate } from "gatsby"
import CloseSVG from "./CloseSVG"
import { Wrapper, Backdrop, CloseIcon } from "./Modal.style"
import { FeedbackBox } from "./Feedback.style"

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
    console.log(window.location)
    setDisplay(false)
    navigate("/Home/")
  }

  if (display) {
    return (
      <Wrapper>
        <Backdrop onClick={close} />
        <FeedbackBox>
          <CloseIcon onClick={close}>
            <CloseSVG />
          </CloseIcon>
          {props.children}
        </FeedbackBox>
      </Wrapper>
    )
  }
  return null
})

export default Feedback
