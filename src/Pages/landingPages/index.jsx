import React, { useState } from 'react';
import Header from '../../components/Header';
import * as S from './styles' 
import Nav from '../../components/Nav';
import Search from "../../components/Search"
import Article from '../../components/Article';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from "../../components/Button"


export default function LandingPages() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()

    if (name || email) {
      const payload = {
        name: name,
        email: email
      }
      localStorage.setItem("user", JSON.stringify(payload))
      setName("")
      setEmail("")
    }
  }
  

  return (
    <S.LandingPages>
      <Nav/>
      <Header/>
      <Search/>
      <Article>
        <S.Form onSubmit={(e) => handleSubmit(e, name, email)}>
          <Input label="Nome:" value={name} onChange={(e) => setName(e.target.value)}/>
          <Input label="E-mail:" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Button label="Enviar" type="submit"/>
        </S.Form>
      </Article>
      <Cards/>
      <Footer/>
    </S.LandingPages>
  )
}
