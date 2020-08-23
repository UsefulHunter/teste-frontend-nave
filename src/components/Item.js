import React, { useEffect, useRef, useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import api from "../services/api"
import TrashSVG from "./TrashSVG"
import PenSVG from "./PenSVG"
import Modal from "./Modal"
import Dialog from "./Dialog"
import Feedback from "./Feedback"

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;

  ::last-child {
    flex-grow: 10;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`
const ItemImg = styled.img`
  object-fit: none;
  object-position: center;
  height: 350px;
  width: 350px;
`

const ItemTitle = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: #212121;
`

const ItemSubtitle = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
  margin-top: 24px;
  margin-bottom: 10px;
`

const ItemText = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`

const ItemIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
`

const ModalIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
  margin-top: auto;
`

const Icon = styled.div`
  margin-right: 16px;
  cursor: pointer;
`

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const ModalImage = styled.img`
  width: 50%;
`
const ModalInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 32px 0 28px 30px;
`
const ModalTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: auto;
`

const DialogButtonPrimary = styled.button`
  background-color: #212121;
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  height: 40px;
  padding: 8px 16px;
  width: 30%;
`

const DialogButtonSecondary = styled.button`
  background-color: #ffffff;
  color: #212121;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  height: 40px;
  padding: 8px 16px;
  box-shadow: none;
  border: 1px solid #212121;
  margin-right: 24px;
  padding: 8px 16px;
  width: 30%;
`

const ItemSingle = props => {
  console.log("props inside ItemSingle", props)
  const [primaryAge, setPrimaryAge] = useState({})
  const [secondaryAge, setSecondaryAge] = useState({})
  const modalRef = useRef()
  const dialogRef = useRef()
  const feedbackRef = useRef()

  const openModal = () => {
    modalRef.current.openModal()
  }

  const openDialog = () => {
    dialogRef.current.openDialog()
  }
  const closeDialog = () => {
    dialogRef.current.close()
  }

  const openFeedback = () => {
    dialogRef.current.close()
    feedbackRef.current.openFeedback()
  }

  const handleDelete = async () => {
    try {
      console.log("Id:", props.data.id)
      await api.delete(`navers/${props.data.id}`)
      openFeedback()
    } catch (error) {
      if (error.response) {
        console.error(error.response)
      }
    }
  }

  const getAge = date => {
    if (date === null) {
      return "Birthdate is Null"
    }
    let today = new Date()
    let birthDate = new Date(date)
    let age = today.getFullYear() - birthDate.getFullYear()
    let month = today.getMonth() - birthDate.getMonth()
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1
    }
    if (month < 0) {
      month = month + 12
    }
    return { age, month }
  }

  useEffect(() => {
    setPrimaryAge(getAge(props.data.birthdate))
    setSecondaryAge(getAge(props.data.admission_date))
  }, [])

  return (
    <Item>
      <ItemImg onClick={openModal} src={props.data.url} />
      <ItemTitle onClick={openModal}>{props.data.name}</ItemTitle>
      <ItemText>{props.data.job_role}</ItemText>
      <ItemIconContainer>
        <Icon onClick={openDialog}>
          <TrashSVG />
        </Icon>
        <Icon>
          <PenSVG />
        </Icon>
      </ItemIconContainer>
      <Modal ref={modalRef}>
        <ModalWrapper>
          <ModalImage src={props.data.url} />
          <ModalInfo>
            <ModalTitle>{props.data.name}</ModalTitle>
            <ItemText>{props.data.job_role}</ItemText>
            <ItemSubtitle>Idade</ItemSubtitle>
            <ItemText>{primaryAge.age}</ItemText>
            <ItemSubtitle>Tempo de empresa</ItemSubtitle>
            <ItemText>
              {secondaryAge.age === 0
                ? `${secondaryAge.month} mes(es)`
                : `${secondaryAge.age} ano(s), ${secondaryAge.month} mes(es)`}
            </ItemText>
            <ItemSubtitle>Projetos que participou</ItemSubtitle>
            <ItemText>{props.data.project}</ItemText>
            <ModalIconContainer>
              <Icon onClick={openDialog}>
                <TrashSVG />
              </Icon>
              <Icon>
                <PenSVG />
              </Icon>
            </ModalIconContainer>
          </ModalInfo>
        </ModalWrapper>
      </Modal>
      <Dialog ref={dialogRef}>
        <ModalTitle>Excluir Naver</ModalTitle>
        <ItemText>Tem certeza que deseja excluir este Naver?</ItemText>
        <ButtonContainer>
          <DialogButtonSecondary onClick={closeDialog}>
            Cancelar
          </DialogButtonSecondary>
          <DialogButtonPrimary onClick={handleDelete}>
            Excluir
          </DialogButtonPrimary>
        </ButtonContainer>
      </Dialog>
      <Feedback ref={feedbackRef}>
        <ModalTitle>Naver excluído</ModalTitle>
        <ItemText>Naver excluído com sucesso!</ItemText>
      </Feedback>
    </Item>
  )
}

export default ItemSingle
