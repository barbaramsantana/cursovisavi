import React from 'react';

import { Container, Title, Texto, Lista, Lista1 } from './styles';

const QuemSomos: React.FC = () => {
  return (
    <Container>
      <Title>Quem Somos</Title>
      <Texto>
        Grupo de Pesquisa formado por:
        <dl>
          <Lista>Docente</Lista>
          <Lista1>Hendrik Macedo</Lista1>
          <Lista>Discente</Lista>
          <Lista1>Bárbara Santana</Lista1>
          <Lista1>Eike Sousa</Lista1>
          <Lista1>Luis Henrique</Lista1>
          <Lista1>Luiz Felipe</Lista1>
          <Lista1>Thais Martins</Lista1>
        </dl>
      </Texto>
    </Container>
  );
};

export default QuemSomos;
