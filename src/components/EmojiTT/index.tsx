/* eslint-disable func-names */
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

//import { ChangePage } from '../../../components';
import { Container, Title, Observacao, Mapa, ImageEmoji, ContainerBalon } from './styles';

import indexImage from '../../assets/index.png';
import medoImage from '../../assets/surprised.svg';
import felizImage from '../../assets/happy-2.svg';
import neutroImage from '../../assets/confused.svg';
import tristeImage from '../../assets/sad.svg';
import nojoImage from '../../assets/ill.svg';
import raivaImage from '../../assets/angry.svg';
import twitterImage from '../../assets/twitter.svg';

//import api from '../../../services/api';
import './styles.css';
import { ISentimentoDTO } from '../../dtos/Covid';
import { getAPISentimento } from '../../utils/updateAPI';

interface Item {
  _id: string;
  id_city: string;
  confirmed: number;
  death: number;
  lethality: number;
  incidence: number;
  mortality: number;
  isolation: number;
  date: string;
  residencia: string;
}
interface IProps {
  citiesSentimento: ISentimentoDTO;
}

const EmojiTT: React.FC <IProps> = ({citiesSentimento}) => {
  //const [items, setItems] = useState<Item[]>([]);
  const [citiesSentimentos, setCitiesSentimentos] = useState<ISentimentoDTO>({
    sentimentFeliz:{
      count: 0,
      sentiment:["Feliz"],
    },
    sentimentMedo:{
      count: 0,
      sentiment:["Medo"],
    },
    sentimentNeutro:{
      count: 0,
      sentiment:["Neutro"],
    },
    sentimentNojo:{
      count: 0,
      sentiment:["Nojo"],
    },
    sentimentRaiva:{
      count: 0,
      sentiment:["Raiva"],
    },
    sentimentTriste:{
      count: 0,
      sentiment:["Triste"],
    },
  });

 /* useEffect(() => {
    api.get('/covid').then(response => {
      setItems(response.data);
    });
  }, []);*/
  const updateAPI = useCallback(async () => {
    const {citiesSentimentoResponse} = await getAPISentimento();
    setCitiesSentimentos(citiesSentimentoResponse);
    console.log("lendo sent");
    console.log(citiesSentimentoResponse);
  }, []);

  useEffect(() => {
    updateAPI();
  }, [updateAPI]);
  console.log("sentimento chegou");
  console.log(citiesSentimentos);
  const selectMedo = useCallback(() => {
    const element = (
    <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentos.sentimentMedo.sentiment[0]}</h3>
      <div>.</div>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectFeliz = useCallback(() => {
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentos.sentimentFeliz.sentiment[0]}</h3>
      <div>.</div>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectNeutro = useCallback(() => {
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentos.sentimentNeutro.sentiment[0]}</h3>
      <div>.</div>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectTriste = useCallback(() => {
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentos.sentimentTriste.sentiment[0]}</h3>
      <div>.</div>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectNojo = useCallback(() => {
    const valuesent = citiesSentimentos.sentimentNojo.sentiment[0];
    console.log("value:");
    console.log(citiesSentimentos.sentimentNojo);
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{valuesent}</h3>
      <div>.</div>  
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectRaiva = useCallback(() => {
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="20px" height="20px"/>
      <h3>{citiesSentimentos.sentimentRaiva.sentiment[0]}</h3>
      {console.log(citiesSentimentos.sentimentRaiva.sentiment[0])}
      <div>.</div>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  return (
    <Container>
      <div>
          <ImageEmoji src={medoImage} alt="emoji" onClick={selectMedo} />
          <ImageEmoji src={felizImage} alt="emoji" onClick={selectFeliz}/>
          <ImageEmoji src={neutroImage} alt="emoji" onClick={selectNeutro}/>
          <ImageEmoji src={tristeImage} alt="emoji" onClick={selectTriste}/>
          <ImageEmoji src={nojoImage} alt="emoji" onClick={selectNojo}/>
          <ImageEmoji src={raivaImage} alt="emoji" onClick={selectRaiva}/>
        </div>
    </Container>
  );
};

export default EmojiTT;
