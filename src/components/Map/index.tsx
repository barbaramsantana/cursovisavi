/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect, useCallback } from 'react';

import GraphsTime from '../GraphsTime';
import GraphsVacina from '../GraphsVacina';
import { Graphs } from '../index';

import { IStateDTO } from '../../dtos/State';
import { ICovidInfoDTO, IVacineDTO } from '../../dtos/Covid';

import {
  Container,
  ContainerMap,
  ContainerTooltip,
  ContainerTooltipCity,
  ContainerTooltipConfirmeds,
  ContainerLegend,
  Item,
  ItemImage,
  ItemText,
  ContainerMapLegend,
  ContainerGraph,
  NameCity,
} from './styles';
import { getAPIState } from '../../utils/updateAPI';

interface IProps {
  cities: IStateDTO[] | undefined;
  values: number[] | undefined;
  covidInfo: ICovidInfoDTO;
  type: string;
  idCCity: string[] | undefined;
  vacineInfo: IVacineDTO;
}

const Map: React.FC<IProps> = ({ cities, values, covidInfo, type, idCCity, vacineInfo }) => {
  const [groupsOpacity, setGroupsOpacity] = useState<number[]>([]);
  const [citiesOpacity, setCitiesOpacity] = useState<number[]>([]);
  const [showGroupsOpacity, setShowGroupsOpacity] = useState(false);
  const [showGraphDetailed, setShowGraphDetailed] = useState(false);

  const [citySelectedClick, setCitySelectedClick] = useState('Cidade');
  const [idSelectedClick, setIdSelectedClick] = useState('Municipio');
  //const [idCSelectedClick, setIdCSelectedClick] = useState('Municipio');

  const [citySelected, setCitySelected] = useState('Cidade');
  const [confirmedsSelected, setConfirmedsSelected] = useState(0);
  const [idcitySelected, setIdcitySelected] = useState('');
  const [idcity, setIdcity] = useState('');

  const handleSelectedCity = useCallback(
    (index: number, value: number, idCCit: string) => {
      setCitySelected(cities ? cities[index].name : '');
      setConfirmedsSelected(value);
      setIdcitySelected(idCCit);
    },
    [cities],
  );
  const onClickMap = useCallback(
    (index: number, idCity: string) => {
      setCitySelectedClick(cities ? cities[index].name : '');
      setIdSelectedClick(idCity);
      //setIdCSelectedClick(idCCity);
      setShowGraphDetailed(false);
      setShowGraphDetailed(true);
    },
    [cities],
  );

  useEffect(() => {
    if (values && values.length !== 0) {
      const newGroupsOpacity: number[] = [];
      let valuemax = Math.max(...values);
      let valuemin = Math.min(...values);
      for (let i = 0; i <8; i += 1) {
        newGroupsOpacity.push(valuemin);
        valuemin = valuemin+valuemax /8;
      }
      newGroupsOpacity.push(valuemax);
      console.log(newGroupsOpacity);

      const newCitiesOpacity: number[] = [];
      values.forEach(value => {
        let opacity = 0.1;
        for (let i = 0; i < 9; i += 1) {
          if (value <= newGroupsOpacity[i]) {
            //console.log(newGroupsOpacity[i]);
            opacity = 0.1 * i;
            break;
          }else if (value >= newGroupsOpacity[i] && i==8) {
            //console.log(newGroupsOpacity[i]);
            opacity = 0.1 * i;
            break;
          }
        }
        newCitiesOpacity.push(opacity);
        //console.log(value);  
      });
      //console.log(newCitiesOpacity);

      setGroupsOpacity(newGroupsOpacity);
      setCitiesOpacity(newCitiesOpacity);
      setShowGroupsOpacity(true);
    }
  }, [values]);

  return (
    <Container>
      <ContainerMapLegend>
        {showGroupsOpacity && (
          <ContainerLegend>
            {groupsOpacity.map((groupOpacity, index) => (
              <Item key={groupOpacity}>
                <ItemImage opacity={index * 0.1} />
              </Item>
            ))}
          </ContainerLegend>
        )}
        <ContainerTooltip>
          <ContainerTooltipCity> {citySelected} </ContainerTooltipCity>
          <ContainerTooltipConfirmeds>
            Valor: {confirmedsSelected}
          </ContainerTooltipConfirmeds>
        </ContainerTooltip>
        <ContainerMap>
          <svg
            version="1.2"
            id="Layer_1"
            x="0px"
            y="0px"
            width="500"
            height="587"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 887"
          >
            {cities &&
              cities.map((city, idx) => (
                <g key={city.id}>
                  <path
                    id={city.id}
                    fill="#11183D"
                    stroke="#D3D3D3"
                    strokeWidth="0.5rem"
                    strokeOpacity="1"
                    opacity={citiesOpacity[idx]}
                    name={city.name}
                    d={city.geometry}
                    onMouseEnter={() =>
                      handleSelectedCity(idx, values ? values[idx] : 0, idCCity ? idCCity[idx] : '')
                    }
                    onClick={() => onClickMap(idx, city.id)}
                  />
                </g>
                  ))}
                  {
                   /* cities && idCCity?.map((city, idx)=>(
                      setIdcity(getAPIState(idCCity.id));
                      <g key={city.id}>
                      <path
                        id={city.id}
                        fill="#11183D"
                        stroke="#D3D3D3"
                        strokeWidth="0.5rem"
                        strokeOpacity="1"
                        opacity={citiesOpacity[idx]}
                        name={idcity.name}
                        d={idcity.geometry}
                        onMouseEnter={() =>
                          handleSelectedCity(idx, values ? values[idx] : 0, idCCity ? idCCity[idx] : '')
                        }
                        onClick={() => onClickMap(idx, city.id)}
                      />
                    </g>
                    ));*/
                  }
          </svg>
        </ContainerMap>
      </ContainerMapLegend>
      {showGraphDetailed && (
        <ContainerGraph>
          <NameCity> {citySelected} </NameCity>
          {type == "vacina" &&(
            <GraphsVacina value='casos' vacineInfo={vacineInfo}/>
          )}
          {type != "vacina" &&(
            <Graphs covidInfo={covidInfo} value={confirmedsSelected} />
          )}
          {/*type == "confirmed" &&(
            <GraphsTime value='casos' cityvalid={idSelectedClick} idcityreal={idcitySelected}/>
            )}
          {type == "death" &&(
            <GraphsTime value='óbitos' cityvalid={idSelectedClick} idcityreal={idcitySelected}/>
          )*/}
        </ContainerGraph>
      )}
    </Container>
  );
};
export default Map;
