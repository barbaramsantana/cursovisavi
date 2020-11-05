/* eslint-disable import/no-unresolved */
import React from 'react';

import { Container, Title, Text } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Title>Sobre</Title>
      <Text>
        Um portal para divulgar dados do novo COVID-19 em Sergipe, utilizando a
        visualização Geoespacial no formato de mapa. Com o intuito de facilitar
        o entendimento das informações é utilizado os Mapas de calor.
      </Text>
    </Container>
  );
};

export default About;
