import React from 'react';
import { Container, Image, Title } from './style';

function Card({ url, name }) {
  return (
    <Container>
      <Image>
        <img className="img" src={ url } alt={ `capa da playlist ${name}` } />
      </Image>
      <Title>{ name }</Title>
    </Container>
  );
}

export default Card;
