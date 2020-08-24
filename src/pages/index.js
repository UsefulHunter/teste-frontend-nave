import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import NaveSVG from "../components/NaveSVG"
import api from "../services/api"

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

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = event => {
    const email = event.target.value
    setEmail(email)
  }

  const handlePassword = event => {
    const password = event.target.value
    setPassword(password)
  }

  const handleSubmit = event => {
    event.preventDefault()

    api
      .post("users/login", {
        email: email,
        password: password,
      })
      .then(response => {
        window.localStorage.setItem("token", response.data.token)
        navigate("/Home")
      })
      .catch(error => {
        if (error.response) {
          console.error("error.response: ", error.response)
        }
      })
  }

  return (
    <Wrapper>
      <LoginContainer>
        <Nave>
          <NaveSVG />
        </Nave>
        <Form onSubmit={handleSubmit}>
          <Label>E-mail</Label>
          <FormInput
            value={email}
            onChange={handleEmail}
            type="text"
            placeholder="E-mail"
          />

          <Label>Senha</Label>
          <FormInput
            value={password}
            onChange={handlePassword}
            type="password"
            placeholder="Senha"
          />

          <FormButton type="submit">Entrar</FormButton>
        </Form>
      </LoginContainer>
    </Wrapper>
  )
}

export default Login
