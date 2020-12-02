/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ChangePage, Map } from '../../../components';

import { IStateDTO } from '../../../dtos/State';
import { ICovidDTO } from '../../../dtos/Covid';

import { getAPICovid } from '../../../utils/updateAPI';

import { exampleState } from '../../../data/data_se';

import { Container, Title, Content, Button, Observacao, ContentButton } from './styles';

interface IProps {
  cities: IStateDTO[];
  citiesCovid: ICovidDTO[];
}

const Page1: React.FC = () => {
  const location = useLocation<IProps>();

  const [cities, setCities] = useState<IStateDTO[]>();
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [numberTitle, setNumberTitle] = useState(0);
  //const [dateCovid, setDateCovid] = useState<string[]>([]);

  const option = [{ label: 'Número de casos' }, { label: 'Número de óbitos' }, { label: 'Letalidade' }, { label: 'Incidência' }, { label: 'Taxa de isolamento' }, { label: 'Taxa de mortlidade' } ];

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
    setNumberTitle(0);
  }, [citiesCovid]);

  const selectDeath = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.death);
    });
    setValues(newConfirmed);
    setNumberTitle(1);
  }, [citiesCovid]);
  const selectLethality = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.lethality);
    });
    setValues(newConfirmed);
    setNumberTitle(2);
  }, [citiesCovid]);
  const selectIncidence = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.incidence);
    });
    setValues(newConfirmed);
    setNumberTitle(3);
  }, [citiesCovid]);
  const selectIsolation = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.isolation);
    });
    setValues(newConfirmed);
    setNumberTitle(4);
  }, [citiesCovid]);
  const selectMortality = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.mortality);
    });
    setValues(newConfirmed);
    setNumberTitle(5);
  }, [citiesCovid]);
  const selectDate = useCallback(() => {
    const newConfirmed: string[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.date);
    });
    //setDateCovid(newConfirmed);
  }, [citiesCovid]);

  useEffect(() => {
    updateProps();
  }, [updateProps]);

  return (
    <Container>
      {//<ChangePage name="before" />
      //<ChangePage name="next" page="/se/page2" cities={cities} />
      }
      <Title>{option[numberTitle].label}</Title>
      <ContentButton>
      <Button type="button" onClick={selectConfirmed}>
        Confirmados
      </Button>
      <Button type="button" onClick={selectDeath}>
        Obitos
      </Button>
      <Button type="button" onClick={selectLethality}>
        Letalidade
      </Button>
      <Button type="button" onClick={selectIncidence}>
        Incidência
      </Button>
      <Button type="button" onClick={selectIsolation}>
        Isolamento
      </Button>
      <Button type="button" onClick={selectMortality}>
        Mortalidade
      </Button>
      </ContentButton>
      <Content>
        <Map cities={cities} values={values} />
      </Content>
    </Container>
  );
};

export default Page1;
