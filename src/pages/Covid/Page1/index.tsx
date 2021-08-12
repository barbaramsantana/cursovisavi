import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ChangePage, Map } from '../../../components';

import { IStateDTO } from '../../../dtos/State';
import {
  ICovidDTO,
  ICovidInfoResponseDTO,
  ICovidInfoDTO,
  IVacineDTO,
  IVacineGrap,
  ILeitoDTO,
} from '../../../dtos/Covid';

import { getAPICovid, getAPICovidInfo, getAPILeito, getAPIVacine } from '../../../utils/updateAPI';

import { exampleState } from '../../../data/data_se';
import { citiesCovidInfoExample } from '../../../utils/example';

import { Container, Title, Content, Button, ContentButton } from './styles';
import api from '../../../services/api';

//import ChangePage from '../../components/ChangePage';

interface IProps {
  cities: IStateDTO[];
  citiesCovid: ICovidDTO[];
  citiesCovidInfo: ICovidInfoResponseDTO;
  citiesVacine: IVacineDTO[];
  citiesLeito: ILeitoDTO[];
}
interface VacineInfoCovid{
  _id: string;
  id_city: string;
  populationTot: number;
  totDosesSent_1: number;
  totDosesSent_2: number;
  totDosesApply_1: number;
  totDosesApply_2: number;
  date: string,
  __v: number;
}

const Page1: React.FC = () => {

  const location = useLocation<IProps>();

  const [cities, setCities] = useState<IStateDTO[]>();
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [citiesVacine, setCitiesVacine] = useState<IVacineDTO[]>([]);
  const [citiesLeito, setCitiesLeito] = useState<ILeitoDTO[]>([]);

  useEffect(() => {
    api.get('/dadosVacina').then(response => {
      //setCitiesVacine(response.data);
      //console.log(response.data);
    });
  }, []);

  const [citiesCovidInfo, setCitiesCovidInfo] = useState<ICovidInfoResponseDTO>(
    citiesCovidInfoExample,
  );
  const [citiesCovidInfoSelected, setCitiesCovidInfoSelected] = useState<
    ICovidInfoDTO
  >({ min: 0, max: 0, med: 0 });
  const [citiesVacineInfoSelected, setCitiesVacineInfoSelected] = useState<
    IVacineDTO
  >({ _id: "", id_city:"", populationTot: 0, totDosesSent_1: 0, totDosesSent_2: 0, totDosesApply_1: 0, totDosesApply_2: 0, date: "", __v: 0 });

  const [values, setValues] = useState<number[]>([]);
  const [idCCity, setIdCCity] = useState<string[]>([]);
  const [numberTitle, setNumberTitle] = useState(0);
  const [typegraph, setTypegraph] = useState("");

  const option = [
    { label: 'Número de casos' },
    { label: 'Número de óbitos' },
    { label: 'Letalidade' },
    { label: 'Incidência' },
    { label: 'Taxa de isolamento' },
    { label: 'Taxa de mortlidade' },
    { label: 'Vacina dose 1' },
    { label: 'Vacina dose 2' },
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
        console.log("leitura banco covid 1:");
        console.log(location.state.citiesCovid);
      } else {
        const { citiesCovidResponse } = await getAPICovid();
        setCitiesCovid(citiesCovidResponse);
        console.log("leitura banco covid 2:");
      }
      if (location.state.citiesVacine) {
        setCitiesVacine(location.state.citiesVacine);
        console.log("leitura banco 1:");
        console.log(location.state.citiesVacine);
      } else {
        const { citiesVacineResponse } = await getAPIVacine();
        setCitiesVacine(citiesVacineResponse);
        console.log("leitura banco 2:");
        console.log(citiesVacine);
      }
      if (location.state.citiesLeito) {
        setCitiesLeito(location.state.citiesLeito);
        //console.log("leitura banco 1:");
        //console.log(location.state.citiesVacine);
      } else {
        const { citiesLeitoResponse } = await getAPILeito();
        setCitiesLeito(citiesLeitoResponse);
        //console.log("leitura banco 2:");
        //console.log(citiesVacine);
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
    const newIdCity: string[] = [];
    citiesCovid.forEach(cityCovid => {
      newIdCity.push(cityCovid._id);
    });
    setIdCCity(newIdCity);
    //newIdCity.push(cityCovid._id);
    //console.log(newConfirmed);
    setTypegraph("confirmed");
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
    const newIdCity: string[] = [];
    citiesCovid.forEach(cityCovid => {
      newIdCity.push(cityCovid._id);
    });
    setIdCCity(newIdCity);
    setTypegraph("death");
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
    const newIdCity: string[] = [];
    citiesCovid.forEach(cityCovid => {
      newIdCity.push(cityCovid._id);
    });
    setIdCCity(newIdCity);
    setTypegraph("lethality");
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
    const newIdCity: string[] = [];
    citiesCovid.forEach(cityCovid => {
      newIdCity.push(cityCovid._id);
    });
    setIdCCity(newIdCity);
    setTypegraph("incidence");
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
    const newIdCity: string[] = [];
    citiesCovid.forEach(cityCovid => {
      newIdCity.push(cityCovid._id);
    });
    setIdCCity(newIdCity);
    setTypegraph("isolation");
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
    const newIdCity: string[] = [];
    citiesCovid.forEach(cityCovid => {
      newIdCity.push(cityCovid._id);
    });
    setIdCCity(newIdCity);
    setTypegraph("mortality");
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
 
  const selectVacina1 = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesVacine.forEach(cityVacine => {
      newConfirmed.push(cityVacine.totDosesApply_1);
      setCitiesVacineInfoSelected(cityVacine);
    });
    const newIdCity: string[] = [];
    citiesCovid.forEach(cityCovid => {
      newIdCity.push(cityCovid._id);
    });
    setIdCCity(newIdCity);
    setValues(newConfirmed);
    setTypegraph("vacina");
    setNumberTitle(6);
    setCitiesCovidInfoSelected({
      max: 0,
      min: 0,
      med: 0,
    });
  }, [ citiesVacine , citiesVacineInfoSelected]);
  
  const selectVacina2 = useCallback(() => {
    const newConfirmed: number[] = [];
    citiesVacine.forEach(cityVacine => {
      newConfirmed.push(cityVacine.totDosesApply_2);
      setCitiesVacineInfoSelected(cityVacine);
    });
    const newIdCity: string[] = [];
    citiesCovid.forEach(cityCovid => {
      newIdCity.push(cityCovid._id);
    });
    setIdCCity(newIdCity);
    setValues(newConfirmed);
    setTypegraph("vacina");
    setNumberTitle(7);
    setCitiesCovidInfoSelected({
      max: 0,
      min: 0,
      med: 0,
    });
  }, [ citiesVacine , citiesVacineInfoSelected]);

  useEffect(() => {
    updateProps();
  }, [updateProps]);


  /*useEffect(() => {
    updateProps();
  }, [updateProps]);
*/
  return (
    <Container>
    <ChangePage name="before" page="/" />
    <ChangePage name="next" page="/se/page2" citiesLeito={citiesLeito}/>
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
        <Button type="button" onClick={selectVacina1}>
          Vacina 1ª dose
        </Button>
        <Button type="button" onClick={selectVacina2}>
          Vacina 2ª dose
        </Button>
      </ContentButton>
      <Content>
        <Map
          cities={cities}
          values={values}
          covidInfo={citiesCovidInfoSelected}
          type={typegraph}
          idCCity={idCCity}
          vacineInfo={citiesVacineInfoSelected}
        />
      </Content>
    </Container>
  );
};

export default Page1;
