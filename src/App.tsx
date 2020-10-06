import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/Global';

import {
  Container,
  Header,
  HeaderText,
  Background,
  Content,
} from './styles/App';

const App: React.FC = () => (
  <Container>
    <Header>
        <HeaderText>Visavi-SE</HeaderText>
    </Header>
    <Background />
    <Content>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Content>
  </Container>
);

export default App;
