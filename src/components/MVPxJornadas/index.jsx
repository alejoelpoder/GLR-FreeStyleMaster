import React from "react";
import styled from 'styled-components'
import Tematica from "./components/Tematicas/tematicas";

const MVPJornadas = () => {
  return (
    <Content>
      <ContTitle>
        <Title>MEJORES POR JORNADA</Title>
      </ContTitle>
      <Tematica/>
    </Content>
  )
}

export default MVPJornadas

const Content = styled.div`
  height: auto;
  width: 850px;
  /* background-color: red; */
  margin: 20px auto;
  padding-bottom: 50px;
`
const ContTitle = styled.div`
  display: flex;
  align-items: center;
  width: 560px;
  height: 60px;
  background-color: black;
  &::before {
    display: block;
    content: '';
    margin: 0 5px;
    height: 31px;
    width: 5px;
    background-color: blue;
  }
`
const Title = styled.h2`
  font-size: 25px;
  height: auto;
  width: 100%;
`