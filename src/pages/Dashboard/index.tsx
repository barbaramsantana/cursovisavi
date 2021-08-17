import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import indexImage from '../../assets/index.png';
import mapaBrasil from '../../assets/brazil.svg'
import medoImage from '../../assets/surprised.svg';
import felizImage from '../../assets/happy-2.svg';
import neutroImage from '../../assets/confused.svg';
import tristeImage from '../../assets/sad.svg';
import nojoImage from '../../assets/ill.svg';
import raivaImage from '../../assets/angry.svg';
import twitterImage from '../../assets/twitter.svg';

import { IStateDTO } from '../../dtos/State';
import { ICovidDTO, ICovidInfoResponseDTO, ILeitoDTO, ISentimentoDTO, IVacineDTO } from '../../dtos/Covid';

import { getAPICovid, getAPICovidInfo, getAPILeito, getAPISentimento, getAPIVacine } from '../../utils/updateAPI';

import { exampleState } from '../../data/data_se';
import { citiesCovidInfoExample } from '../../utils/example';

import {
  Container,
  Title,
  ContainerImage,
  Image,
  ContainerButton,
  ButtonIcon,
  ContainerBalon,
  Observacao,
  MapaText,
} from './styles';
import MapBrazil from '../../components/MapBrazil';
import EmojiTT from '../../components/EmojiTT';

const Dashboard: React.FC = () => {
  const [cities] = useState<IStateDTO[]>(exampleState);
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [citiesCovidInfo, setCitiesCovidInfo] = useState<ICovidInfoResponseDTO>(
    citiesCovidInfoExample,
  );
  const [citiesVacine, setCitiesVacine] = useState<IVacineDTO[]>([]);

  const [citiesLeito, setCitiesLeito] = useState<ILeitoDTO[]>([]);

  const [citiesSentimento, setCitiesSentimento] = useState<ISentimentoDTO>({
    sentimentFeliz:{
      count: 0,
      sentiment:[""],
    },
    sentimentMedo:{
      count: 0,
      sentiment:[""],
    },
    sentimentNeutro:{
      count: 0,
      sentiment:[""],
    },
    sentimentNojo:{
      count: 0,
      sentiment:[""],
    },
    sentimentRaiva:{
      count: 0,
      sentiment:[""],
    },
    sentimentTriste:{
      count: 0,
      sentiment:[""],
    },
  });

  const updateAPI = useCallback(async () => {
    const { citiesCovidResponse } = await getAPICovid();
    const { citiesCovidInfoResponse } = await getAPICovidInfo();
    const {citiesVacineResponse} = await getAPIVacine();
    const {citiesLeitoResponse} = await getAPILeito();
    const {citiesSentimentoResponse} = await getAPISentimento();
    setCitiesVacine(citiesVacineResponse);
    setCitiesLeito(citiesLeitoResponse);
    setCitiesSentimento(citiesSentimentoResponse);
    //console.log("dash vacina:");
    //console.log(citiesVacineResponse);
    setCitiesCovid(citiesCovidResponse);
    setCitiesCovidInfo(citiesCovidInfoResponse);
  }, []);

  useEffect(() => {
    updateAPI();
  }, [updateAPI]);


  return (
    <Container>
      <Title>Acompanhe o sentimento brasileiro sobre o covid
      <EmojiTT citiesSentimento={citiesSentimento}></EmojiTT>
      <div id="twitter">
      </div>
      </Title>
      <ContainerButton>
      </ContainerButton>
      <ContainerImage>
        {//<Image src={mapaBrasil} alt="Logo de SE" />
        }
        <Link
          to={{
            pathname: '/se/page1',
            state: {
              cities,
              citiesCovid,
              citiesCovidInfo,
              citiesVacine,
              citiesLeito,
            },
          }}
          >
        <MapBrazil>
        </MapBrazil>
        </Link>
      </ContainerImage>
      {//
}  
      <div>Ícones feitos por <a href="https://www.flaticon.com/br/autores/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
      <MapaText>Encontre mapas com os dados do Covid-19 em Sergipe clicando no estado </MapaText>
    </Container>
  );
};

export default Dashboard;
