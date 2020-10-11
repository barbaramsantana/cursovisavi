import React from 'react';

import {Header, HeaderText} from './styles';

const HeaderMenu: React.FC = () => {
  return (
    <Header>
        <HeaderText href="/se">Visavi-SE</HeaderText>
        <HeaderText href="/se/sobre">Sobre</HeaderText>
        <HeaderText href="/se/quemsomos">Quem Somos</HeaderText>
    </Header>
  );
};

export default HeaderMenu;
