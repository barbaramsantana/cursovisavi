import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Routes from './routes';
import Headerr from './components/Headerr/index';
import GlobalStyle from './styles/Global';

import {
  Container,
  Background,
  Content,
} from './styles/App';

const App: React.FC = () => (
  <BrowserRouter>
    <Container>
      <Headerr/>
      <Background />
      <Content>
          <Routes />
          <GlobalStyle />
      </Content>
    </Container>
  </BrowserRouter>
);

export default App;
