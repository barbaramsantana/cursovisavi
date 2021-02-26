import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Map } from '../../../components';

import { IStateDTO } from '../../../dtos/State';
import {
  ICovidDTO,
  ICovidInfoResponseDTO,
  ICovidInfoDTO,
} from '../../../dtos/Covid';

import { getAPICovid, getAPICovidInfo } from '../../../utils/updateAPI';

import { exampleState } from '../../../data/data_se';
import { citiesCovidInfoExample } from '../../../utils/example';

import { Container, Title, Content, Button, ContentButton } from './styles';

interface IProps {
  cities: IStateDTO[];
  citiesCovid: ICovidDTO[];
  citiesCovidInfo: ICovidInfoResponseDTO;
}

const Page1: React.FC = () => {
  const location = useLocation<IProps>();

  const [cities, setCities] = useState<IStateDTO[]>();
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [citiesCovidInfo, setCitiesCovidInfo] = useState<ICovidInfoResponseDTO>(
    citiesCovidInfoExample,
  );
  const [citiesCovidInfoSelected, setCitiesCovidInfoSelected] = useState<
    ICovidInfoDTO
  >({ min: 0, max: 0, med: 0 });

  const [values, setValues] = useState<number[]>([]);
  const [numberTitle, setNumberTitle] = useState(0);

  const option = [
    { label: 'Número de casos' },
    { label: 'Número de óbitos' },
    { label: 'Letalidade' },
    { label: 'Incidência' },
    { label: 'Taxa de isolamento' },
    { label: 'Taxa de mortlidade' },
  ];

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
      if (location.state.citiesCovidInfo) {
        setCitiesCovidInfo(location.state.citiesCovidInfo);
      } else {
        const { citiesCovidInfoResponse } = await getAPICovidInfo();
        setCitiesCovidInfo(citiesCovidInfoResponse);
      }
    }
  }, [location.state]);

  const selectConfirmed = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.confirmed);
    });
    //console.log(newConfirmed);
    setValues(newConfirmed);
    setNumberTitle(0);
    setCitiesCovidInfoSelected({
      max: citiesCovidInfo.max_confirm,
      min: citiesCovidInfo.min_confirm,
      med: citiesCovidInfo.med_confirm,
    });
  }, [
    citiesCovid,
    citiesCovidInfo.max_confirm,
    citiesCovidInfo.med_confirm,
    citiesCovidInfo.min_confirm,
  ]);

  const selectDeath = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.death);
    });
    setValues(newConfirmed);
    setNumberTitle(1);
    setCitiesCovidInfoSelected({
      max: citiesCovidInfo.max_death,
      min: citiesCovidInfo.min_death,
      med: citiesCovidInfo.med_death,
    });
  }, [
    citiesCovid,
    citiesCovidInfo.max_death,
    citiesCovidInfo.med_death,
    citiesCovidInfo.min_death,
  ]);

  const selectLethality = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.lethality);
    });
    setValues(newConfirmed);
    setNumberTitle(2);
    setCitiesCovidInfoSelected({
      max: citiesCovidInfo.max_lethality,
      min: citiesCovidInfo.min_lethality,
      med: citiesCovidInfo.med_lethality,
    });
  }, [
    citiesCovid,
    citiesCovidInfo.max_lethality,
    citiesCovidInfo.med_lethality,
    citiesCovidInfo.min_lethality,
  ]);

  const selectIncidence = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.incidence);
    });
    setValues(newConfirmed);
    setNumberTitle(3);
    setCitiesCovidInfoSelected({
      max: citiesCovidInfo.max_incidence,
      min: citiesCovidInfo.min_incidence,
      med: citiesCovidInfo.med_incidence,
    });
  }, [
    citiesCovid,
    citiesCovidInfo.max_incidence,
    citiesCovidInfo.med_incidence,
    citiesCovidInfo.min_incidence,
  ]);

  const selectIsolation = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.isolation);
    });
    setValues(newConfirmed);
    setNumberTitle(4);
    setCitiesCovidInfoSelected({
      max: citiesCovidInfo.max_isolation,
      min: citiesCovidInfo.min_isolation,
      med: citiesCovidInfo.med_isolation,
    });
  }, [
    citiesCovid,
    citiesCovidInfo.max_isolation,
    citiesCovidInfo.med_isolation,
    citiesCovidInfo.min_isolation,
  ]);

  const selectMortality = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.mortality);
    });
    setValues(newConfirmed);
    setNumberTitle(5);
    setCitiesCovidInfoSelected({
      max: citiesCovidInfo.max_mortality,
      min: citiesCovidInfo.min_mortality,
      med: citiesCovidInfo.med_mortality,
    });
  }, [
    citiesCovid,
    citiesCovidInfo.max_mortality,
    citiesCovidInfo.med_mortality,
    citiesCovidInfo.min_mortality,
  ]);

  useEffect(() => {
    updateProps();
  }, [updateProps]);

  return (
    <Container>
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
        <Button type="button" onClick={selectMortality}>
          Mortalidade
        </Button>
      </ContentButton>
      <Content>
        <Map
          cities={cities}
          values={values}
          covidInfo={citiesCovidInfoSelected}
        />
      </Content>
    </Container>
  );
};

export default Page1;
