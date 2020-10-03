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
      <ContainerImage>
        <Image src={indexImage} alt="Logo de SE" />
      </ContainerImage>
      <ContainerButton>
        <Link to="/page1">
          Ver Dados
          <ButtonIcon />
        </Link>
      </ContainerButton>
    </Container>
  );
};

export default Index;
