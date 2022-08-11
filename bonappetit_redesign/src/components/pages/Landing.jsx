import React from 'react'
import Categories from "./Categories"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 60px;
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: inline;
  justify-content: center;
`;

const Landing = () => {
  return (
    <div className="App">
        <Nav/>
        <Title> What's Your Mood ? </Title>
        <Categories />
        <Footer/>
    </div>
  )
}

export default Landing;