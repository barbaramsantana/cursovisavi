import React from 'react';
import axios from 'axios';

import { ChangePage, MapaSe} from '../../components';
import Headerr from '../../components/Headerr/index';

import { Container, Title, Observacao } from './styles';

const Page1: React.FC = () => {
  return (
    <Container>
      <ChangePage name="before" />
      <ChangePage name="next" page="/se/page2" />

      <Title>Número de Casos</Title>
      <Observacao>ATENÇÃO: Os valores nos mapas estão em atualização</Observacao>
      <MapaSe url="arquivo.json"/>
    </Container>
  );
};

export default Page1;
