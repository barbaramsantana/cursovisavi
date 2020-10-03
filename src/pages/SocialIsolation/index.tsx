import React from 'react';

import { Container, Text } from './styles';
import MapaSe from './../../components/MapaSe';

const SocialIsolation: React.FC = () => {
  return (
    <Container>
      <Text>Número de Casos</Text>
      <MapaSe/>
      <Text>Número de Óbitos</Text>
      <MapaSe/>
    </Container>
  );
};

export default SocialIsolation;
