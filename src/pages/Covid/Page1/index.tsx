/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ChangePage, Map } from '../../../components';

import { IStateDTO } from '../../../dtos/State';
import { ICovidDTO } from '../../../dtos/Covid';

import { getAPICovid } from '../../../utils/updateAPI';

import { exampleState } from '../../../data/data_se';

import { Container, Title, Content, Button } from './styles';

interface IProps {
  cities: IStateDTO[];
  citiesCovid: ICovidDTO[];
}

const Page1: React.FC = () => {
  const location = useLocation<IProps>();

  const [cities, setCities] = useState<IStateDTO[]>();
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [values, setValues] = useState<number[]>([]);

  const option = [{ label: 'Numero de Casos' }, { label: '' }];

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

  const selectObitos = useCallback(() => {
    const newDeath: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newDeath.push(cityCovid.death);
    });
    setValues(newDeath);
  }, [citiesCovid]);

  useEffect(() => {
    updateProps();
  }, [updateProps]);

  return (
    <Container>
      <ChangePage name="before" />
      <ChangePage name="next" page="/se/page2" cities={cities} />

      <Title>{option[0].label}</Title>
      <Button type="button" onClick={selectConfirmed}>
        Confirmados
      </Button>
      <Button type="button" onClick={selectObitos}>
        Obitos
      </Button>

      <Content>
        <Map cities={cities} values={values} />
      </Content>
    </Container>
  );
};

export default Page1;
