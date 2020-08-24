import React, { useState, useRef } from "react"
import api from "../../services/api"
import Header from "../../components/Header"
import styled from "styled-components"
import ArrowBackSVG from "../../components/ArrowBackSVG"
import Label from "../../components/Label"
import Input from "../../components/Input"
import Feedback from "../../components/Feedback"
import { navigate } from "gatsby"
import { dateFormatter } from "../../utils/DateFormatter"

const AddNaverContainer = styled.div`
  padding: 24px 32px 32px 32px;
`

const Text = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 32px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
  }
`

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #212121;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
    width: 100%;
  }
`
const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    margin-left: 0;
  }
`

const FormButton = styled.button`
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
  margin-left: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Icon = styled.div`
  margin-right: 16px;
  cursor: pointer;
`

const AddNaver = () => {
  const [name, setName] = useState("")
  const [jobRole, setJobRole] = useState("")
  const [date, setDate] = useState("")
  const [admissionDate, setAdmissionDate] = useState("")
  const [project, setProject] = useState("")
  const [url, setUrl] = useState("")
  const feedbackRef = useRef()

  const openFeedback = () => {
    feedbackRef.current.openFeedback()
  }

  const onSubmit = async event => {
    event.preventDefault()
    try {
      await api.post("navers", {
        job_role: jobRole,
        admission_date: admissionDate,
        birthdate: date,
        project: project,
        name: name,
        url: url,
      })
      openFeedback()
    } catch (error) {
      if (error.response) {
        console.error("error.response: ", error.response)
      }
    }
  }

  return (
    <AddNaverContainer>
      <Header />
      <ContentWrapper>
        <FormContainer onSubmit={onSubmit}>
          <TitleContainer>
            <Icon
              onClick={() => {
                navigate("/Home")
              }}
            >
              <ArrowBackSVG />
            </Icon>

            <Title>Adicionar Naver</Title>
          </TitleContainer>
          <InputRow>
            <InputItem>
              <Label value="Nome" />
              <Input
                name="Name"
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
                placeholder="Nome"
              />
            </InputItem>
            <InputItem>
              <Label value="Cargo" />
              <Input
                name="JobRole"
                type="text"
                onChange={event => setJobRole(event.target.value)}
                value={jobRole}
                placeholder="Cargo"
              />
            </InputItem>
          </InputRow>
          <InputRow>
            <InputItem>
              <Label value="Idade" />
              <Input
                name="Date"
                type="date"
                value={date}
                onChange={event => setDate(dateFormatter(event.target.value))}
                placeholder="Idade"
              />
            </InputItem>
            <InputItem>
              <Label value="Tempo de Empresa" />
              <Input
                name="AdmissionDate"
                type="date"
                value={admissionDate}
                onChange={event =>
                  setAdmissionDate(dateFormatter(event.target.value))
                }
                placeholder="Tempo de empresa"
              />
            </InputItem>
          </InputRow>
          <InputRow>
            <InputItem>
              <Label value="Projetos" />
              <Input
                name="Project"
                type="text"
                value={project}
                onChange={event => setProject(event.target.value)}
                placeholder="Projetos que participou"
              />
            </InputItem>
            <InputItem>
              <Label value="URL da foto do Naver" />
              <Input
                name="Url"
                type="url"
                value={url}
                onChange={event => setUrl(event.target.value)}
                placeholder="URL da foto do Naver"
              />
            </InputItem>
          </InputRow>
          <FormButton type="submit">Salvar</FormButton>
        </FormContainer>
      </ContentWrapper>
      <Feedback ref={feedbackRef}>
        <Title>Naver criado</Title>
        <Text>Naver criado com sucesso!</Text>
      </Feedback>
    </AddNaverContainer>
  )
}

export default AddNaver
