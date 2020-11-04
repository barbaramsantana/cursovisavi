import React from 'react';

import { Link } from 'react-router-dom';

import indexImage from '../../assets/index.png';

import {
  Container,
  Title,
  ContainerImage,
  Image,
  ContainerButton,
  ButtonIcon,
  Observacao,
} from './styles';

const Index: React.FC = () => {
  return (
    <Container>
      <Title>Encontre mapas como os dados do Covid-19 em Sergipe </Title>
        <Link to="/se">
      <ContainerImage>
          <Image src={indexImage} alt="Logo de SE" />
      </ContainerImage>
        </Link>
      <ContainerButton>
        <Link to="/se/page1">
          Visualizar Mapas
          <ButtonIcon />
        </Link>
      </ContainerButton>
    </Container>
  );
};

export default Index;
