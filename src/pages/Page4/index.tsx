import React from 'react';
import axios from 'axios';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title } from './styles';

const Page4: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" page="/page3"/>
      <ChangePage name="next" page="/page5" />

      <Title>Casos por Densidade Demográfica</Title>
      <MapaSe url="arquivo.json"/>
    </Container>
  );
};

export default Page4;
