import React from "react"
import * as S from "./styles"
import menu from "../../utils/img/menu.png"

export default function Nav () {
  return (
    <S.Nav>
      <S.Menu src={menu} />
        <li><a href="#void">Home</a></li> 
        <li><a href="#void">Produtos</a></li>
        <li><a href="#void">Minha Conta</a></li>
        <li><a href="#void">Lista de Desejo</a></li>
    </S.Nav>
  )
}