import styled from "styled-components"

export const Button = styled.button `
  height: 30px;
  border: 0;
  border-radius: 8px;
  color: rgb(196, 12, 144);
  font-size: 15px;
  width: 100%;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover{
    background-color: rgb(196, 12, 144);
    color: #fff;
  }
`