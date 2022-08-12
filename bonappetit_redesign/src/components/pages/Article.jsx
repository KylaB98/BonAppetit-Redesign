import React from 'react'
import styled from 'styled-components'
import '../../css/articlecss/articletext.css'

const Container = styled.div`
    height: 400px;
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-content: flex-end;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
`;

const Title = styled.h1`
    padding: 50px;
    display: flex;
    width: 100%;
    cursor: pointer;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 25px;
  box-shadow:2px 2px 2px #404040;
  display: flex;
  flex-direction: column;
`; 


const Article = ({item}) => {
    return (
      <Container>
          <Image src={item.img}/>
          <Title>{item.title}</Title> 
      </Container>
    )
  }

export default Article