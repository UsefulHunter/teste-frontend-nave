import React, { useEffect, useRef, useState } from "react"
import { navigate } from "gatsby"
import api from "../services/api"
import TrashSVG from "./TrashSVG"
import PenSVG from "./PenSVG"
import Modal from "./Modal"
import Dialog from "./Dialog"
import Feedback from "./Feedback"
import { getAge } from "../utils/DateFormatter"
import {
  Item,
  ItemImg,
  ItemTitle,
  ItemSubtitle,
  ItemText,
  ItemIconContainer,
  ModalIconContainer,
  Icon,
  ModalWrapper,
  ModalImage,
  ModalInfo,
  ModalTitle,
  ButtonContainer,
  DialogButtonPrimary,
  DialogButtonSecondary,
} from "./Item.style"

const ItemSingle = props => {
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
      await api.delete(`navers/${props.data.id}`)
      openFeedback()
    } catch (error) {
      if (error.response) {
        console.error(error.response)
      }
    }
  }
  const handleNavigate = id => {
    navigate("/EditNaver", {
      state: { id },
    })
  }

  useEffect(() => {
    setPrimaryAge(getAge(props.data.birthdate))
    setSecondaryAge(getAge(props.data.admission_date))
  }, [props.data.birthdate, props.data.admission_date])

  return (
    <Item>
      <ItemImg onClick={openModal} src={props.data.url} />
      <ItemTitle onClick={openModal}>{props.data.name}</ItemTitle>
      <ItemText>{props.data.job_role}</ItemText>
      <ItemIconContainer>
        <Icon onClick={openDialog}>
          <TrashSVG />
        </Icon>
        <Icon onClick={() => handleNavigate(props.data.id)}>
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
            <ItemText>{primaryAge.year}</ItemText>
            <ItemSubtitle>Tempo de empresa</ItemSubtitle>
            <ItemText>
              {secondaryAge.year === 0
                ? `${secondaryAge.month} mes(es)`
                : `${secondaryAge.year} ano(s), ${secondaryAge.month} mes(es)`}
            </ItemText>
            <ItemSubtitle>Projetos que participou</ItemSubtitle>
            <ItemText>{props.data.project}</ItemText>
            <ModalIconContainer>
              <Icon onClick={openDialog}>
                <TrashSVG />
              </Icon>
              <Icon onClick={() => handleNavigate(props.data.id)}>
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
