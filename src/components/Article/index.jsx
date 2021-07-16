import React from "react"
import * as S from "./styles"
import photo from "../../utils/img/images.png"

export default function Article ({children}) {
  return (
    <S.Section>
      <S.Article>
      <S.Image src={photo} alt=""/>
      </S.Article>
      <S.Article>
        <p>Cadastre seu e-mail para receber nossas promoções</p>
        {children}
      </S.Article> 
    </S.Section>
  )
}