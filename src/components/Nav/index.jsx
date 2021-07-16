import React from "react"
import * as S from "./styles"
import menu from "../../utils/img/menu.png"

export default function Nav () {
  return (
    <S.Nav>
      <S.Menu src={menu} />
        <li><a href="#">Home</a></li> 
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Minha Conta</a></li>
        <li><a href="#">Lista de Desejo</a></li>
    </S.Nav>
  )
}