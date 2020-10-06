import React from 'react';
import axios from 'axios';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title } from './styles';

const Page4: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" page="/se/page4"/>
      <ChangePage name="next" />

      <Title>Taxa de Isolamento Social</Title>
      <MapaSe url="arquivo.json"/>
    </Container>
  );
};

export default Page4;
