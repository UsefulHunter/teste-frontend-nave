import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import api from "../../services/api"
import Header from "../../components/Header"
import ItemSingle from "../../components/Item"
import styled from "styled-components"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 32px;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    margin-top: 0;
  }
`

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  color: #212121;

  @media (max-width: 768px) {
    font-size: 58px;
  }
`

const Button = styled.button`
  background-color: #212121;
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  height: 40px;
  padding: 8px 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
const ItemArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 32px;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`

const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      try {
        let responseData = await api.get("navers")
        setItems(responseData.data)
        console.log(items)
      } catch (error) {
        if (error.response) {
          console.error("error.response: ", error.response)
        }
      }
    }
    getItems()
  }, [])

  const handleNavigation = () => {
    navigate("/AddNaver")
  }

  return (
    <HomeContainer>
      <Header />
      <TitleWrapper>
        <Title>Navers</Title>
        <Button onClick={handleNavigation}>Adicionar Naver</Button>
      </TitleWrapper>
      <ItemArea>
        {items.map(item => {
          return <ItemSingle key={item.id} data={item} />
        })}
      </ItemArea>
    </HomeContainer>
  )
}

export default Home
