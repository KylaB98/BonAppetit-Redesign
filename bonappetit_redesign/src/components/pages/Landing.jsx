import React from 'react'
import Categories from "./Categories"
import TopRecipes from './TopRecipes'
import Articles from './Articles'
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 60px;
  margin: 10px;
  padding-top: 40px;
  display: flex;
  align-items: inline;
  justify-content: center;
`;

const TitleTwo = styled.h1`
  font-size: 60px;
  margin: 10px;
  padding-top: 80px;
  display: flex;
  align-items: inline;
  justify-content: center;
  margin-top: 50px;
`;

const Landing = () => {
  return (
    <div className="App">
        <Nav/>
        <Title> Top Recipes </Title>
        <TopRecipes />
        <br></br>
        <TitleTwo> What's Your Mood ? </TitleTwo>
        <Categories />
        <Title> What To Read </Title>
        <Articles />
        <Footer/>
    </div>
  )
}

export default Landing;