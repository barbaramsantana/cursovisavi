import React from 'react';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title } from './styles';

const Page2: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" page="/se/page1" />
      <ChangePage name="next" page="/se/page3"  />

      <Title>Número de Óbitos</Title>
      <MapaSe url="arquivo.json" />
    </Container>
  );
};

export default Page2;
