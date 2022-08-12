import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease;
    cursor: pointer;

`;

const Container = styled.div`
    flex: 1;
   flex-direction: row;
   flex-wrap: wrap;
   margin: 5px;
   min-width: 280px;
   height: 250px;
   display: flex;
   align-content: flex-start;
   align-items: center;
   jusify-content: center;
   position: relative;


    &:hover ${Info}{
        opacity: 1;
    }
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
    color; white;
    display: flex;
    text-align: center;
`;

const Description = styled.div`
    font-size: 25px;
    display: flex;
    justify-content: center;
`;

const Recipe = ({item}) => {
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

export default Recipe