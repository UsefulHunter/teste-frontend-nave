import React, { useState, useEffect } from "react"
import api from "../../services/api"
import Header from "../../components/Header"
import styled from "styled-components"
import ArrowBackSVG from "../../components/ArrowBackSVG"
import Label from "../../components/Label"
import Input from "../../components/Input"
import Feedback from "../../components/Feedback"

const EditNaverContainer = styled.div`
  padding: 24px 32px 32px 32px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0;
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
  margin-left: 16px;
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
  width: 60vw;
`
const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`
const InputItem = styled.div`
  display: flex;
  flex-direction: column;
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

const EditNaver = () => {
  return (
    <EditNaverContainer>
      <Header />
      <ContentWrapper>
        <FormContainer>
          <TitleContainer>
            <ArrowBackSVG />
            <Title>Editar Naver</Title>
          </TitleContainer>
          <InputRow>
            <InputItem>
              <Label value="Nome" />
              <Input placeholder="Nome" />
            </InputItem>
            <InputItem>
              <Label value="Cargo" />
              <Input placeholder="Cargo" />
            </InputItem>
          </InputRow>
          <InputRow>
            <InputItem>
              <Label value="Idade" />
              <Input placeholder="Idade" />
            </InputItem>
            <InputItem>
              <Label value="Tempo de Empresa" />
              <Input placeholder="Tempo de empresa" />
            </InputItem>
          </InputRow>
          <InputRow>
            <InputItem>
              <Label value="Projetos" />
              <Input placeholder="Projetos que participou" />
            </InputItem>
            <InputItem>
              <Label value="URL da foto do Naver" />
              <Input placeholder="URL da foto do Naver" />
            </InputItem>
          </InputRow>
          <FormButton>Salvar</FormButton>
        </FormContainer>
      </ContentWrapper>
    </EditNaverContainer>
  )
}

export default EditNaver
