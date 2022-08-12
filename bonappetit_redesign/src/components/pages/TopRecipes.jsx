import React from 'react'
import TopRecipe from './TopRecipe'
import { topRecipes } from './data'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px;
    margin: 40px;
    justify-content: space-between;
`;

const TopRecipes = () => {
  return (
    <Container>
        {topRecipes.map(item=>(
            <TopRecipe item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default TopRecipes