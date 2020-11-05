/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ChangePage, Map } from '../../../components';

import { IStateDTO } from '../../../dtos/State';
import { ICovidDTO } from '../../../dtos/Covid';

import { getAPICovid } from '../../../utils/updateAPI';

import { exampleState } from '../../../data/data_se';

import { Container, Title, Content } from './styles';

interface IProps {
  cities: IStateDTO[];
  citiesCovid: ICovidDTO[];
}

const Page1: React.FC = () => {
  const location = useLocation<IProps>();

  const [cities, setCities] = useState<IStateDTO[]>();
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [values, setValues] = useState<number[]>([]);

  const updateProps = useCallback(async () => {
    if (location.state) {
      if (location.state.cities) {
        setCities(location.state.cities);
      } else {
        setCities(exampleState);
      }
      if (location.state.citiesCovid) {
        setCitiesCovid(location.state.citiesCovid);
      } else {
        const { citiesCovidResponse } = await getAPICovid();
        setCitiesCovid(citiesCovidResponse);
      }
    }
  }, []);

  const selectConfirmed = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.confirmed);
    });
    setValues(newConfirmed);
  }, [citiesCovid]);

  useEffect(() => {
    updateProps();
  }, [updateProps]);

  return (
    <Container>
      <ChangePage name="before" />
      <ChangePage name="next" page="/se/page2" cities={cities} />

      <Title>Número de Casos</Title>

      <Content>
        <Map cities={cities} values={values} />

        <button type="button" onClick={selectConfirmed}>
          Confirmados
        </button>
      </Content>
    </Container>
  );
};

export default Page1;
