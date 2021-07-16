import styled from 'styled-components'

export const Section = styled.section `
  font-family: 'Roboto', sans-serif;
  color: rgb(104, 100, 100);
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  width: 100%;
  @media only screen and (max-device-width: 1215px) {
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
  }
`
export const Article = styled.article `
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-device-width: 1435px) {
    margin-top: 10px;
  }
`

export const Image = styled.img `
width: 100%;
max-width: 1920px;
`