/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ChangePage, Map } from '../../../components';

import { IStateDTO } from '../../../dtos/State';
import { ICovidDTO } from '../../../dtos/Covid';
import {IMaxMinDTO} from '../../../dtos/MaxMin';

import { getAPICovid, getAPIMaxMin } from '../../../utils/updateAPI';

import { exampleState } from '../../../data/data_se';

import { Container, Title, Content, Button, Observacao, ContentButton } from './styles';
import api from '../../../services/api';

interface IProps {
  cities: IStateDTO[];
  citiesCovid: ICovidDTO[];
  maxMin: IMaxMinDTO[];
}

const Page1: React.FC = () => {
  const location = useLocation<IProps>();

  const [cities, setCities] = useState<IStateDTO[]>();
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [maxMin, setMaxMin] = useState<IMaxMinDTO[]>([]);
  const [maxMinValue, setMaxMinValue] = useState<number[]>();
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
      if (location.state.maxMin) {
        setMaxMin(location.state.maxMin);
      } else {
        const { citiesMaxMinResponse } = await getAPIMaxMin();
        setMaxMin(citiesMaxMinResponse);
      }
    }
  }, []);

  const selectConfirmed = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.confirmed);
      //console.log(citiesCovid);
    });
    //const maxMinConfirmed: number[] = [];
    console.log("oiee");
    Object.keys(maxMin).forEach( item => {
      console.log('aqui');
      console.log(maxMin[item].max_confirm);
    });

    /*const newMaxMin: number[]= [];
    Object.entries(maxMin).map((item) => {
    //Object.entries(maxMin).forEach(item =>{
      if(item[0] == "max_confirm"){
        const max_confirmm = item[1];
        console.log("max");
        console.log(item[1]);
        setMaxMinValue(max_confirmm);
      }
      console.log("leitura");
      console.log(item[0]); 
      console.log("rota");
      console.log(maxMin);
    });*/
    setValues(newConfirmed);
    //setMaxMinValue(newMaxMin);
    //console.log(maxMinValue);
    setNumberTitle(0);
    //console.log(newConfirmed);
  }, [citiesCovid, maxMin]);

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
        <Map cities={cities} values={values} maxMin={maxMinValue} />
      </Content>
    </Container>
  );
};

export default Page1;
