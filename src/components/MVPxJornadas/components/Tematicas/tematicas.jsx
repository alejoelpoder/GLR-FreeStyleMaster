import { useState } from 'react'
import styled from "styled-components"
import ComboBox from "../ComboBox/comboBox"
import BlockName from "../BlockName/blockname"
import { DataAutorsGeneral } from '../const/index'

const Tematica = () => {
  const [ idArticulos, setIdArticulos ] = useState([])
  const [ info, setInfo ] = useState({})

  const optionsJornada = DataAutorsGeneral?.map((item) => {
    return {
      id : item?.id,
      description : item?.jornada
    }
  })

  const CambiarJornada = (e) => {
    let select = e.target.value
    setIdArticulos(select)
  }

  
  const showImage = (index) => {
    try{
      const obj = DataAutorsGeneral[idArticulos - 1].autors
      setInfo(obj[index])
    }
    catch(e){
      console.log('error')
    }
  }

  return (
    <>
      <ComboBox 
        onChange={(e) => {
          CambiarJornada(e)
        }}
        options={optionsJornada}
        placeholder="Selecione una jornada"
      />
      <Block>
          <Container>
            <ContentBlocks1>
                <BlockName nameBlock="EASY MODE" onClick={() => showImage('0')} />
                <BlockName nameBlock="TEMÁTICA"  onClick={() => showImage('1')} />
                <BlockName nameBlock="SANGRE"  onClick={() => showImage('2')} />
                <BlockName nameBlock="DELUXE"  onClick={() => showImage('3')} />
            </ContentBlocks1>

            <WrapperPhoto>
              {info.photo && <ImagenAutor src={info.photo}/>}
            </WrapperPhoto>

            <ContentBlocks2>
                <BlockName nameBlock="HARD MODE"  onClick={() => showImage('4')} />
                <BlockName nameBlock="RAMDOM MODE"  onClick={() => showImage('5')} />
                <BlockName nameBlock="A CAPELLA"  onClick={() => showImage('6')} />
                <BlockName nameBlock="MVP"  onClick={() => showImage('7')} />
            </ContentBlocks2>
          </Container>
      </Block>
    </>
  )
}

export default Tematica

const Block = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  margin-top: 20px;
  `
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 750px;
`
const ContentBlocks1 = styled.div`
  height: auto;
  width: auto;
`
const ContentBlocks2 = styled.div`
  height: auto;
  width: auto;
`
const WrapperPhoto = styled.div`
  height: 200px;
  width: 200px;
  margin: 0 20px;
`
const ImagenAutor = styled.img`
  height: auto;
  width: 100%;
`