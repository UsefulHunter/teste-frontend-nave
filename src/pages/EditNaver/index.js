import React, { useState, useRef, useEffect } from "react"
import api from "../../services/api"
import Header from "../../components/Header"
import styled from "styled-components"
import ArrowBackSVG from "../../components/ArrowBackSVG"
import Label from "../../components/Label"
import Input from "../../components/Input"
import Feedback from "../../components/Feedback"
import { navigate } from "gatsby"
import { dateFormatter } from "../../utils/DateFormatter"

const EditNaverContainer = styled.div`
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

const EditNaver = props => {
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

  useEffect(() => {
    const getUser = async () => {
      try {
        let response = await api.get(`navers/${props.location.state.id}`)
        setName(response.data.name)
        setJobRole(response.data.job_role)
        setDate(response.data.birthdate)
        setAdmissionDate(response.data.admission_date)
        setProject(response.data.project)
        setUrl(response.data.url)
      } catch (error) {
        if (error.response) {
          console.error("Error:", error.response)
        }
      }
    }
    getUser()
  }, [])
  const onSubmit = async event => {
    event.preventDefault()
    try {
      await api.put(`navers/${props.location.state.id}`, {
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
    <EditNaverContainer>
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

            <Title>Editar Naver</Title>
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
                required
              />
            </InputItem>
            <InputItem>
              <Label value="Cargo" />
              <Input
                name="JobRole"
                onChange={event => setJobRole(event.target.value)}
                value={jobRole}
                placeholder="Cargo"
                required
              />
            </InputItem>
          </InputRow>
          <InputRow>
            <InputItem>
              <Label value="Idade" />
              <Input
                name="Date"
                value={date}
                type="date"
                onChange={event => setDate(event.target.value)}
                placeholder="Idade"
                disabled
              />
            </InputItem>
            <InputItem>
              <Label value="Tempo de Empresa" />
              <Input
                name="AdmissionDate"
                value={admissionDate}
                type="date"
                onChange={event => setAdmissionDate(event.target.value)}
                placeholder="Tempo de empresa"
                disabled
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
        <Title>Naver atualizado</Title>
        <Text>Naver atualizado com sucesso!</Text>
      </Feedback>
    </EditNaverContainer>
  )
}

export default EditNaver
