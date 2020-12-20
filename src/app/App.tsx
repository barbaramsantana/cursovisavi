import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import Routes from '../routes';
import GlobalStyle from '../styles/globalStyle';

import { Container, Header, Menu, Background, Content } from './styles';

const App: React.FC = () => (
  <BrowserRouter>
    <Container>
      <Header>
        <Menu>
          <Link to="/">Visavi-SE</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/team">Quem Somos</Link>
        </Menu>
      </Header>
      <Background />
      <Content>
        <Routes />
        <GlobalStyle />
      </Content>
    </Container>
  </BrowserRouter>
);

export default App;
