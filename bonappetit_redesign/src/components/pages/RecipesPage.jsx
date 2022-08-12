import React from 'react'
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import Recipes from './Recipes'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin: 50px;
    justify-content: space-between;
`;

const AllRecipes = () => {
  return (
    <div>
      <Nav />
      <Recipes />
      <Footer />
    </div>
  )
}

export default AllRecipes