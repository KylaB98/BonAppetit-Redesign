import React from 'react'
import Article from './Article'
import { articles } from './data'
import styled from 'styled-components'

const Container = styled.div`
`;

const Articles = () => {
    return (
      <Container>
          {articles.map(item=>(
              <Article item={item} key={item.id}/>
          ))}
      </Container>
    )
  }

export default Articles