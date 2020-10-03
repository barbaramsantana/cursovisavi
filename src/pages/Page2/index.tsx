import React from 'react';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title } from './styles';

const Page2: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" page="/page1" />
      <ChangePage name="next" />

      <Title>Número de Casos</Title>
      <MapaSe />
    </Container>
  );
};

export default Page2;
