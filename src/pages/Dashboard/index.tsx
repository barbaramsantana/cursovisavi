import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import indexImage from '../../assets/index.png';

import { IStateDTO } from '../../dtos/State';

import { exampleState } from '../../data/data_se';

import {
  Container,
  Title,
  ContainerImage,
  Image,
  ContainerButton,
  ButtonIcon,
} from './styles';
import { ICovidDTO } from '../../dtos/Covid';
import { getAPICovid } from '../../utils/updateAPI';

const Dashboard: React.FC = () => {
  const [cities] = useState<IStateDTO[]>(exampleState);
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);

  const updateAPI = useCallback(async () => {
    // const { citiesResponse } = await getAPIState('se');
    // setCities(citiesResponse);

    const { citiesCovidResponse } = await getAPICovid();
    setCitiesCovid(citiesCovidResponse);
  }, []);

  useEffect(() => {
    updateAPI();
  }, [updateAPI]);

  return (
    <Container>
      <Title>Encontre mapas como os dados do Covid-19 em Sergipe </Title>
      <ContainerImage>
        <Image src={indexImage} alt="Logo de SE" />
      </ContainerImage>
      <ContainerButton>
        <Link
          to={{
            pathname: '/se/page1',
            state: {
              cities,
              citiesCovid,
            },
          }}
        >
          Visualizar Mapas
          <ButtonIcon />
        </Link>
      </ContainerButton>
    </Container>
  );
};

export default Dashboard;
