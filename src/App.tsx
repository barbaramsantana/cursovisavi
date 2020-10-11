import React from 'react';
import { BrowserRouter} from 'react-router-dom';
//import { Link } from 'react-router-dom';

import Routes from './routes';
import HeaderMenu from './components/HeaderMenu/index'
import GlobalStyle from './styles/Global';

import {
  Container,
  Background,
  Content,
} from './styles/App';

const App: React.FC = () => (
  <Container>
    <HeaderMenu/>
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
