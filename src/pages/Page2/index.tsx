import React from 'react';

import { ChangePage, MapaSe } from '../../components';

import { Container, Title, Observacao } from './styles';

const Page2: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" page="/se/page1" />
      <ChangePage name="next" page="/se/page3"  />

      <Title>Número de Óbitos</Title>
      <Observacao>ATENÇÃO: Os valores nos mapas estão em atualização</Observacao>
      <MapaSe url="arquivo.json" />
    </Container>
  );
};

export default Page2;
