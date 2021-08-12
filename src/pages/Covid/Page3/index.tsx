/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//import { ChangePage, Gra } from '../../../components';
import Graphsuti from '../../../components/Graphsuti';
import { ChangePage } from '../../../components';

import { IStateDTO } from '../../../dtos/State';
import { ICovidDTO, ILeitoDTO } from '../../../dtos/Covid';

import { getAPICovid, getAPILeito } from '../../../utils/updateAPI';

import { exampleState } from '../../../data/data_se';

import { Container, Title, Content, Button } from './styles';
import GraphsEnf from '../../../components/GraphsEnf';

interface IProps {
  cities: IStateDTO[];
  citiesCovid: ICovidDTO[];
  citiesLeito: ILeitoDTO[];

}

const Page2: React.FC = () => {
  const location = useLocation<IProps>();

  const [cities, setCities] = useState<IStateDTO[]>();
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [values, setValues] = useState<number[]>([]);

  const [citiesLeito, setCitiesLeito] = useState<ILeitoDTO[]>([{_id: "",
  UF: "",
  totAdmittedPrivate_UTI: 0,
  totAdmittedPrivate_infirmary: 0,
  totAdmittedSUS_UTI: 0,
  totAdmittedSUS_infirmary: 0,
  totHospitalBeds_available: 0,
  totHospitalBeds_occupied: 0,
  date: "",
  __v: 0,}]);

  const [citiesLeitoInfoSelected, setCitiesLeitoInfoSelected] = useState<
    ILeitoDTO
  >({ _id: "",
    UF: "",
    totAdmittedPrivate_UTI: 0,
    totAdmittedPrivate_infirmary: 0,
    totAdmittedSUS_UTI: 0,
    totAdmittedSUS_infirmary: 0,
    totHospitalBeds_available: 0,
    totHospitalBeds_occupied: 0,
    date: "",
    __v: 0, });


  const option = [{ label: 'Numero de Óbitos' }, { label: '' }];

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
      if (location.state.citiesLeito) {
        setCitiesLeito(location.state.citiesLeito);
        console.log(location.state.citiesLeito);
      } else {
        const { citiesLeitoResponse } = await getAPILeito();
        setCitiesLeito(citiesLeitoResponse);
        console.log(citiesLeitoResponse);
      }

    }
  }, []);

  const selectObitos = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesCovid.forEach(cityCovid => {
      newConfirmed.push(cityCovid.death);
    });
    setValues(newConfirmed);
  }, [citiesCovid]);

  useEffect(() => {
    updateProps();
  }, [updateProps]);

  return (
    <Container>
      <ChangePage name="before" page="/se/page2" />
      <ChangePage name="next" page="" cities={cities} citiesLeito={citiesLeito} />

      <Title>Leitos de Enfermaria</Title>
      <div>
        <GraphsEnf value="Enfermaria" citiesLeito={citiesLeito[0]}></GraphsEnf>
      </div>

      <Content />
    </Container>
  );
};

export default Page2;
