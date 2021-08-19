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
  ContainerTwitter,
} from './styles';
import MapBrazil from '../../components/MapBrazil';
import EmojiTT from '../../components/EmojiTT';
import { ImageEmoji } from '../../components/EmojiTT/styles';

const Dashboard: React.FC = () => {
  const [cities] = useState<IStateDTO[]>(exampleState);
  const [citiesCovid, setCitiesCovid] = useState<ICovidDTO[]>([]);
  const [citiesCovidInfo, setCitiesCovidInfo] = useState<ICovidInfoResponseDTO>(
    citiesCovidInfoExample,
  );
  const [citiesVacine, setCitiesVacine] = useState<IVacineDTO[]>([]);

  const [citiesLeito, setCitiesLeito] = useState<ILeitoDTO[]>([]);

  const [tamEmoji, setTamEmoji] = useState<number>(0);
  const [tamFeliz, setTamFeliz] = useState<number>(0);
  const [tamMedo, setTamMedo] = useState<number>(0);
  const [tamNeutro, setTamNeutro] = useState<number>(0);
  const [tamTriste, setTamTriste] = useState<number>(0);
  const [tamNojo, setTamNojo] = useState<number>(0);
  const [tamRaiva, setTamRaiva] = useState<number>(0);

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
    setTamFeliz(citiesSentimentoResponse.sentimentFeliz.count);
    setTamMedo(citiesSentimentoResponse.sentimentMedo.count);
    setTamRaiva(citiesSentimentoResponse.sentimentRaiva.count);
    setTamNeutro(citiesSentimentoResponse.sentimentNeutro.count);
    setTamTriste(citiesSentimentoResponse.sentimentTriste.count);
    setTamNojo(citiesSentimentoResponse.sentimentNojo.count);
    setCitiesSentimento(citiesSentimentoResponse);
    setCitiesCovid(citiesCovidResponse);
    setCitiesCovidInfo(citiesCovidInfoResponse);
  }, []);

  useEffect(() => {
    updateAPI();
  }, [updateAPI]);

  const selectMedo = useCallback(async () => {
      const {citiesSentimentoResponse} = await getAPISentimento();
      const valuecount = citiesSentimentoResponse.sentimentMedo.count;
      const valuealeatory = Math.floor(Math.random() * valuecount);
      setTamEmoji(valuecount);
      const element = (
      <ContainerBalon>
        <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
        <h3>{citiesSentimentoResponse.sentimentMedo.sentiment[valuealeatory]}</h3>
        <div>.</div>
      </ContainerBalon>
      );
      ReactDOM.render(element, document.getElementById('twitter'));
    }, []);
  const selectFeliz = useCallback(async () => {
    const {citiesSentimentoResponse} = await getAPISentimento();
    const valuecount = citiesSentimentoResponse.sentimentFeliz.count;
      const valuealeatory = Math.floor(Math.random() * valuecount);
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentoResponse.sentimentFeliz.sentiment[valuealeatory]}</h3>
      <div>.</div>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectNeutro = useCallback(async () => {
    const {citiesSentimentoResponse} = await getAPISentimento();
    const valuecount = citiesSentimentoResponse.sentimentNeutro.count;
      const valuealeatory = Math.floor(Math.random() * valuecount);
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentoResponse.sentimentNeutro.sentiment[valuealeatory]}</h3>
      <div>.</div>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectTriste = useCallback(async () => {
    const {citiesSentimentoResponse} = await getAPISentimento();
    const valuecount = citiesSentimentoResponse.sentimentTriste.count;
      const valuealeatory = Math.floor(Math.random() * valuecount);
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentoResponse.sentimentTriste.sentiment[valuealeatory]}</h3>
      <div>.</div>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectNojo = useCallback(async () => {
    const {citiesSentimentoResponse} = await getAPISentimento();
    const valuecount = citiesSentimentoResponse.sentimentNojo.count;
      const valuealeatory = Math.floor(Math.random() * valuecount);
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentoResponse.sentimentNojo.sentiment[valuealeatory]}</h3>
      <div>.</div>  
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectRaiva = useCallback(async () => {
    const {citiesSentimentoResponse} = await getAPISentimento();
    const valuecount = citiesSentimentoResponse.sentimentRaiva.count;
      const valuealeatory = Math.floor(Math.random() * valuecount);
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentoResponse.sentimentRaiva.sentiment[valuealeatory]}</h3>
      <div>.</div>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);

  return (
    <Container>
      <Title>Acompanhe o sentimento brasileiro sobre o covid
      <ContainerTwitter id="twitter">
      </ContainerTwitter>
      <Container>
      <div>
          <ImageEmoji tamEmoji={(tamMedo+1)/10} src={medoImage} alt="emoji" onClick={selectMedo} />
          <ImageEmoji tamEmoji={(tamFeliz+1)/10} src={felizImage} alt="emoji" onClick={selectFeliz}/>
          <ImageEmoji tamEmoji={(tamNeutro+1)/10} src={neutroImage} alt="emoji" onClick={selectNeutro}/>
          <ImageEmoji tamEmoji={(tamTriste+1)/10} src={tristeImage} alt="emoji" onClick={selectTriste}/>
          <ImageEmoji tamEmoji={(tamNojo+1)/10} src={nojoImage} alt="emoji" onClick={selectNojo}/>
          <ImageEmoji tamEmoji={(tamRaiva+1)/10} src={raivaImage} alt="emoji" onClick={selectRaiva}/>
        </div>
    </Container>
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
