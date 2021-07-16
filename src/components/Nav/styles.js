import styled from 'styled-components'

export const Nav = styled.ul ` 
  display: flex;
  justify-content:flex-end;
  list-style-type: none;
  margin-bottom: 20px 0px;
  overflow: hidden;
  
  li {
    display: inline;
  }

  a {
    padding-left: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: rgb(104, 100, 100);
    text-decoration: none;
    @media only screen and (max-device-width: 530px) {
    display: none;
    }
  }
`

export const Menu = styled.img `
  display: none;
  @media only screen and (max-device-width: 530px) {
    display: block;
  }
`