import React from "react"
import * as S from "./styles"
import product1 from "../../utils/img/produto1.png"
import product2 from "../../utils/img/produto2.png"
import product3 from "../../utils/img/produto3.png"

export default function Cards () {
  return (
    <S.Section>
    <S.Article> 
        <h1>Nossos produtos</h1>
    <S.Image src={product1} alt=""/>
    <S.Image src={product2} alt=""/>
    <S.Image src={product3} alt=""/>
    </S.Article>
  </S.Section>
  )
}