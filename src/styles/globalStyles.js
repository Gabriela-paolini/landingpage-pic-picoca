import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
  padding: 0;
  box-sizing: border-box;
}
html, body {
  height: 100vh;
  background-color: rgb(217, 199, 212);
  margin: 25px;
  @media only screen and (max-device-width: 1150px) {
    margin: 0;
}
}
`