import React from 'react';
import axios from 'axios';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title, Observacao } from './styles';

const Page4: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" page="/se/page3"/>
      <ChangePage name="next" page="/se/page5" />

      <Title>Casos por Densidade Demográfica</Title>
      <Observacao>ATENÇÃO: Os valores nos mapas estão em atualização</Observacao>
      <MapaSe url="arquivo.json"/>
    </Container>
  );
};

export default Page4;
