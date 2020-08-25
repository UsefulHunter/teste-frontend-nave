import React, { useState, useRef } from "react"
import api from "../../services/api"
import Header from "../../components/Header"
import ArrowBackSVG from "../../components/ArrowBackSVG"
import Label from "../../components/Label"
import Input from "../../components/Input"
import Feedback from "../../components/Feedback"
import { navigate } from "gatsby"
import { dateFormatter } from "../../utils/DateFormatter"
import {
  NaverContainer,
  Text,
  TitleContainer,
  Title,
  ContentWrapper,
  FormContainer,
  InputRow,
  InputItem,
  FormButton,
  Icon,
} from "../../utils/AddNaver.styles"

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
        admission_date: dateFormatter(admissionDate),
        birthdate: dateFormatter(date),
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
    <NaverContainer>
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
                onChange={event => setDate(event.target.value)}
                placeholder="Idade"
              />
            </InputItem>
            <InputItem>
              <Label value="Tempo de Empresa" />
              <Input
                name="AdmissionDate"
                type="date"
                value={admissionDate}
                onChange={event => setAdmissionDate(event.target.value)}
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
    </NaverContainer>
  )
}

export default AddNaver
