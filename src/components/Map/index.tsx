import React, { useState, useEffect, useCallback } from 'react';

import { IStateDTO } from '../../dtos/State';
import Graficos from '../Graficos';

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

interface IProps {
  cities: IStateDTO[] | undefined;
  values: number[] | undefined;
  maxMin: number[] | undefined;
}

const Map: React.FC<IProps> = ({ cities, values, maxMin }) => {
  const [groupsOpacity, setGroupsOpacity] = useState<number[]>([]);
  const [citiesOpacity, setCitiesOpacity] = useState<number[]>([]);
  const [showGroupsOpacity, setShowGroupsOpacity] = useState(false);
  const [showGraphDetailed, setShowGraphDetailed] = useState(false);
  const maxMinV = maxMin;

  const [citySelectedClick, setCitySelectedClick] = useState('Cidade');
  const [idSelectedClick, setIdSelectedClick] = useState('Municipio');

  const [citySelected, setCitySelected] = useState('Cidade');
  const [confirmedsSelected, setConfirmedsSelected] = useState(0);

  const handleSelectedCity = useCallback(
    (index: number, value: number) => {
      setCitySelected(cities ? cities[index].name : '');
      setConfirmedsSelected(value);
    },
    [cities],
  );
  const onClickMap = useCallback(
    (index: number, idCity: string) => {
      setCitySelectedClick(cities ? cities[index].name : '');
      /* document.querySelectorAll('path')
      .forEach(s => s.addEventListener('click', function(event) {
        const vermelhoAtual = document.querySelector('path[style="stroke: #f00;"]');
        if (vermelhoAtual){ s.style.fill = 'inherit';}
        else{

          s.style.stroke = '#f00';
        }
      })
      ); */
      setIdSelectedClick(idCity);
      setShowGraphDetailed(false);
      setShowGraphDetailed(true);
    },
    [cities],
  );

  useEffect(() => {
    if (values && values.length !== 0) {
      const newGroupsOpacity: number[] = [];
      for (let i = 0; i < 8; i += 1) {
        newGroupsOpacity.push(i * Math.max(...values));
      }

      const newCitiesOpacity: number[] = [];
      values.forEach(value => {
        let opacity = 0;
        for (let i = 0; i < 10; i += 1) {
          if (value < newGroupsOpacity[i]) {
            opacity = 0.1 * i;
            break;
          }
        }
        newCitiesOpacity.push(opacity);
      });

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
                <ItemText> {groupOpacity} </ItemText>
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
                    // stroke="#ffff"
                    strokeWidth="0.5rem"
                    strokeOpacity="1"
                    opacity={citiesOpacity[idx]}
                    name={city.name}
                    d={city.geometry}
                    onMouseEnter={
                      () => handleSelectedCity(idx, values ? values[idx] : 0)
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                    onClick={() => onClickMap(idx, city.id)}
                  />
                </g>
              ))}
          </svg>
        </ContainerMap>
      </ContainerMapLegend>
      {showGraphDetailed && (
        <ContainerGraph>
          <NameCity> {citySelected} </NameCity>
          {
            // <Graficos maxmin={maxMinV} muni={confirmedsSelected}/>
          }
          <Graficos maxmin={[4888, 60, 1273.67]} muni={confirmedsSelected} />
        </ContainerGraph>
      )}
    </Container>
  );
};
export default Map;
