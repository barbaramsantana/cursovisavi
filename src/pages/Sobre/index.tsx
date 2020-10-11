import React from 'react';

import { Container, Title, Texto} from './styles';

const Sobre: React.FC = () => {
  return (
    <Container>
      <Title>Sobre</Title>
      <Texto>
        Um portal para divulgar dados do novo COVID-19 em Sergipe, 
        utilizando a visualização Geoespacial no formato de mapa.
        Com o intuito de facilitar o entendimento das informações é utilizado os Mapas de calor.
      </Texto>

    </Container>
  );
};

export default Sobre;
