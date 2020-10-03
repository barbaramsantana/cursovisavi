import React from 'react';
import { Link } from 'react-router-dom';

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import { Container, Button } from './styles';

interface ChangePageProps {
  name: 'before' | 'next';
  page?: string;
}

const ChangePage: React.FC<ChangePageProps> = ({ name, page }) => {
  return (
    <Container>
      <Button className={`${name} ${!page && 'disabled'}`}>
        <Link to={page ? page : ''}>
          {name === 'before' && <MdNavigateBefore />}
          {name === 'next' && <MdNavigateNext />}
        </Link>
      </Button>
    </Container>
  );
};

export default ChangePage;
