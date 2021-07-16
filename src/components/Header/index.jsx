import React from "react"
import * as S from "./styles"
import header from "../../utils/img/logo.png"

export default function Header () {
  return (
    <S.Header>
      <S.Img src={header} alt=""/>
    </S.Header>
  )
}