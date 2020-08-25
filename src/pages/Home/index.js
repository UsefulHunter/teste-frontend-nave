import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import api from "../../services/api"
import Header from "../../components/Header"
import ItemSingle from "../../components/Item"
import { HomeContainer, TitleWrapper, Title, Button, ItemArea } from "./styles"
const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      try {
        let responseData = await api.get("navers")
        setItems(responseData.data)
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
