import React from "react"
import * as S from "./styles"
import search from "../../utils/img/lupa.png"
export default function Search () {
  return (
    <S.Box>
      <S.InputSearch>
            <S.ImgButton src={search} alt=""/>
            <S.Search 
            type="text" 
              value="" 
              placeholder=" O que você está procurando?"
            />
      </S.InputSearch>
    </S.Box>
  )
}