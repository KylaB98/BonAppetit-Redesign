import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 60vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 50px;
  color: white;
  text-shadow: 2px 2px 2px #404040;
  margin-bottom: 20px;
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
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <a href={item.link}><Button>Let's Go</Button></a>
        </Info>
    </Container>
  )
};

export default CategoryItem