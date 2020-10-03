import React from 'react';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title } from './styles';

const Page1: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" />
      <ChangePage name="next" page="/page2" />

      <Title>Número de Casos</Title>
      <MapaSe />
    </Container>
  );
};

export default Page1;
