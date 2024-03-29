/* eslint-disable func-names */
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { ChangePage } from '../../../components';
import { Container, Title, Observacao, Mapa, ImageEmoji, ContainerBalon } from './styles';

import indexImage from '../../../assets/index.png';
import medoImage from '../../../assets/surprised.svg';
import felizImage from '../../../assets/happy-2.svg';
import neutroImage from '../../../assets/confused.svg';
import tristeImage from '../../../assets/sad.svg';
import nojoImage from '../../../assets/ill.svg';
import raivaImage from '../../../assets/angry.svg';
import twitterImage from '../../../assets/twitter.svg';

import api from '../../../services/api';
import './styles.css';

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

const Page3: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('/covid').then(response => {
      setItems(response.data);
    });
  }, []);

  
  const selectMedo = useCallback(() => {
    const element = (
    <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="15px" height="15px"/>
      <h1>Teste Twitter Medo</h1>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectFeliz = useCallback(() => {
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="15px" height="15px"/>
      <h1>Teste Twitter Feliz</h1>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectNeutro = useCallback(() => {
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="15px" height="15px"/>
      <h1>Teste Twitter Neutro</h1>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectTriste = useCallback(() => {
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="15px" height="15px"/>
      <h1>Teste Twitter Triste</h1>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectNojo = useCallback(() => {
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="15px" height="15px"/>
      <h1>Teste Twitter Nojo</h1>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  const selectRaiva = useCallback(() => {
    const element = (
      <ContainerBalon>
      <img src={twitterImage} alt="logo do twitter" width="15px" height="15px"/>
      <h1>Teste Twitter Raiva</h1>
    </ContainerBalon>
    );
    ReactDOM.render(element, document.getElementById('twitter'));
  }, []);
  return (
    <Container>
      <ChangePage name="before" page="/se/page3" />
      <ChangePage name="next" page="" />
      <Title>Veja qual o sentimento das pessoas no Twitter</Title>
      <div>
          <ImageEmoji src={medoImage} alt="emoji" onClick={selectMedo} />
          <ImageEmoji src={felizImage} alt="emoji" onClick={selectFeliz}/>
          <ImageEmoji src={neutroImage} alt="emoji" onClick={selectNeutro}/>
          <ImageEmoji src={tristeImage} alt="emoji" onClick={selectTriste}/>
          <ImageEmoji src={nojoImage} alt="emoji" onClick={selectNojo}/>
          <ImageEmoji src={raivaImage} alt="emoji" onClick={selectRaiva}/>
        <div>Ícones feitos por <a href="https://www.flaticon.com/br/autores/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    </Container>
  );
};

export default Page3;
