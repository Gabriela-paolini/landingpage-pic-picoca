import React from "react"
import * as S from "./styles"

export default function Input ({label, ...rest}) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label><S.Input {...rest}/>
    </S.Container>
  )
    
  
}