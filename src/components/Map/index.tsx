import React, { useState, useEffect, useCallback } from 'react';

import { IStateDTO } from '../../dtos/State';

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
} from './styles';

interface IProps {
  cities: IStateDTO[] | undefined;
  values: number[] | undefined;
}

const Map: React.FC<IProps> = ({ cities, values }) => {
  const [groupsOpacity, setGroupsOpacity] = useState<number[]>([]);
  const [citiesOpacity, setCitiesOpacity] = useState<number[]>([]);
  const [showGroupsOpacity, setShowGroupsOpacity] = useState(false);

  const [citySelected, setCitySelected] = useState('Cidade');
  const [confirmedsSelected, setConfirmedsSelected] = useState(0);

  const handleSelectedCity = useCallback(
    (index: number, value: number) => {
      setCitySelected(cities ? cities[index].name : '');
      setConfirmedsSelected(value);
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
                  fill="#11183D"
                  stroke="#D3D3D3"
                  opacity={citiesOpacity[idx]}
                  name={city.name}
                  d={city.geometry}
                  onMouseEnter={
                    () => handleSelectedCity(idx, values ? values[idx] : 0)
                    // eslint-disable-next-line react/jsx-curly-newline
                  }
                />
              </g>
            ))}
        </svg>
        <ContainerTooltip>
          <ContainerTooltipCity> {citySelected} </ContainerTooltipCity>
          <ContainerTooltipConfirmeds>
            Confirmados: {confirmedsSelected}
          </ContainerTooltipConfirmeds>
        </ContainerTooltip>
      </ContainerMap>

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
    </Container>
  );
};
export default Map;
