import React from 'react'
import Recipe from './Recipe'
import { allRecipes } from './data'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Recipes = () => {
  return (
    <Container>
        {allRecipes.map(item=>(
            <Recipe item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Recipes