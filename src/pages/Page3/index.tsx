import React from 'react';
import axios from 'axios';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title, Observacao } from './styles';

const Page3: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" page="/se/page2"/>
      <ChangePage name="next" page="/se/page4" />

      <Title>Taxa de letalidade</Title>
      <Observacao>ATENÇÃO: Os valores nos mapas estão em atualização</Observacao>
      <MapaSe url="arquivo.json"/>
    </Container>
  );
};

export default Page3;
