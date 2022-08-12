import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin: 10px;
    padding: 20px;
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
    position: relative;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    display: flex;
    text-align: left;
`;

const Description = styled.div`
    font-size: 25px;
    display: flex;
    justify-content: center;
`;

const TopRecipe = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
        </Info>
    </Container>
  )
}

export default TopRecipe