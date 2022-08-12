import React from 'react'
import styled from 'styled-components'

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