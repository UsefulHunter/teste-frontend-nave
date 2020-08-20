import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import NaveSVG from "../components/NaveSVG"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Nave = styled.div`
  margin: 40px 106px;
`

const LoginContainer = styled.div`
  border: 1px solid #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
`

const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #212121;
  margin-left: 32px;
  margin-bottom: 4px;
`
const FormInput = styled.input`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #9e9e9e;
  height: 40px;
  margin-left: 32px;
  padding-left: 8px;
  margin-right: 32px;
  margin-bottom: 32px;
`

const FormButton = styled.button`
  background-color: #212121;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  height: 40px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 40px;
`

const Login = () => (
  <Wrapper>
    <LoginContainer>
      <Nave>
        <NaveSVG />
      </Nave>
      <Form>
        <Label>E-mail</Label>
        <FormInput placeholder="E-mail" />

        <Label>Senha</Label>
        <FormInput placeholder="Senha" />

        <FormButton>Entrar</FormButton>
      </Form>
    </LoginContainer>
  </Wrapper>
)

export default Login
