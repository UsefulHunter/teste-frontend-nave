import React, { useState } from "react"
import { navigate } from "gatsby"
import NaveSVG from "../components/NaveSVG"
import api from "../services/api"
import { Helmet } from "react-helmet"
import {
  Wrapper,
  Nave,
  LoginContainer,
  Form,
  Label,
  FormInput,
  FormButton,
} from "../utils/styles"

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
        typeof window !== "undefined" &&
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
      <Helmet>
        <meta chatSet="utf-8" />
        <title>Frontend Challenge</title>
      </Helmet>
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
