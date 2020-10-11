import React from 'react';
import axios from 'axios';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title, Observacao } from './styles';

const Page4: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" page="/se/page4"/>
      <ChangePage name="next" />

      <Title>Taxa de Isolamento Social</Title>
      <Observacao>ATENÇÃO: Os valores nos mapas estão em atualização</Observacao>
      <MapaSe url="arquivo.json"/>
    </Container>
  );
};

export default Page4;
