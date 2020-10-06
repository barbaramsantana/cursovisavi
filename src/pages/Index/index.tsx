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
} from './styles';

const Index: React.FC = () => {
  return (
    <Container>
      <Title>Encontre dados do Covid-19 em Sergipe</Title>
        <Link to="/se">
      <ContainerImage>
          <Image src={indexImage} alt="Logo de SE" />
      </ContainerImage>
        </Link>
      <ContainerButton>
        <Link to="/se/page1">
          Ver Dados
          <ButtonIcon />
        </Link>
      </ContainerButton>
    </Container>
  );
};

export default Index;
