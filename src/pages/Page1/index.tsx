import React from 'react';
import axios from 'axios';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title } from './styles';

const Page1: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" />
      <ChangePage name="next" page="/se/page2" />

      <Title>Número de Casos</Title>
      <MapaSe url="arquivo.json"/>
    </Container>
  );
};

export default Page1;
