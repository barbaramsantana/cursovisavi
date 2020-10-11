import React from 'react';
import { Link } from 'react-router-dom';

import {MenuText} from './styles';

const Menu: React.FC = () => {
  return (
    <MenuText>
        <Link to="/se">
            <MenuText>Visavi-SE</MenuText>
        </Link>
        <Link to="/se/sobre">
            <MenuText>Sobre</MenuText>
        </Link>
        <Link to="/se/quemsomos">
            <MenuText>Quem Somos</MenuText>
        </Link>
    </MenuText>
  );
};

export default Menu;