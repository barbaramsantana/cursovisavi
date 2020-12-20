import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import indexImage from '../../assets/index.png';

import { IStateDTO } from '../../dtos/State';
import { ICovidDTO, ICovidInfoResponseDTO } from '../../dtos/Covid';

import { getAPICovid, getAPICovidInfo } from '../../utils/updateAPI';

import { exampleState } from '../../data/data_se';
import { citiesCovidInfoExample } from '../../utils/example';

import {
  Container,
  Title,
  ContainerImage,
  Image,
  ContainerButton,
  ButtonIcon,
} from './styles';

const Dashboard: React.FC = () => {
  const [cities] = useState<IStateDTO[]>(exampleState);
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [citiesCovidInfo, setCitiesCovidInfo] = useState<ICovidInfoResponseDTO>(
    citiesCovidInfoExample,
  );

  const updateAPI = useCallback(async () => {
    const { citiesCovidResponse } = await getAPICovid();
    const { citiesCovidInfoResponse } = await getAPICovidInfo();
    setCitiesCovid(citiesCovidResponse);
    setCitiesCovidInfo(citiesCovidInfoResponse);
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
              citiesCovidInfo,
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
