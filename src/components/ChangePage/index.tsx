import React from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import { IStateDTO } from '../../dtos/State';

import { Container, Button } from './styles';
import { ILeitoDTO } from '../../dtos/Covid';

interface ChangePageProps {
  name: 'before' | 'next';
  page?: string;
  cities?: IStateDTO[];
  citiesLeito?: ILeitoDTO[];
}

const ChangePage: React.FC<ChangePageProps> = ({ name, page, cities, citiesLeito }) => {
  return (
    <Container>
      <Button className={`${name} ${!page && 'disabled'}`}>
        <Link
          to={{
            pathname: page || '',
            state: {
              cities,
            },
          }}
        >
          {name === 'before' && <MdNavigateBefore />}
          {name === 'next' && <MdNavigateNext />}
        </Link>
      </Button>
    </Container>
  );
};

export default ChangePage;
