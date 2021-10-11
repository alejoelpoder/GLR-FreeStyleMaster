import styled from "styled-components";

const BlockName = ({nameBlock, key, onClick, colorItem}) => {
  return (
    <ContentTitle 
      onClick={onClick} 
      key={key} 
      colorItem={colorItem}
    >
      <Title>{nameBlock}</Title>
    </ContentTitle>
  )
}

export default BlockName

const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 150px;
  background-color: black;
  margin-bottom: 20px;
  border-bottom: 2px solid #040F40;
  border-right: 2px solid #040F40;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    transition: 0.4s;
    opacity: 0.7;
  }
`
const Title = styled.h2`
  font-size: 15px;
  margin: 15px;
  text-align: center;
`