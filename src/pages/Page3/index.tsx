import React from 'react';
import axios from 'axios';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title } from './styles';

const Page3: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" page="/se/page2"/>
      <ChangePage name="next" page="/se/page4" />

      <Title>Taxa de letalidade</Title>
      <MapaSe url="arquivo.json"/>
    </Container>
  );
};

export default Page3;
