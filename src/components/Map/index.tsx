import React, { useState, useEffect } from 'react';

import { IStateDTO } from '../../dtos/State';

import {
  Container,
  ContainerMap,
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
          className="ma"
          xmlns="http://www.w3.org/2000/svg"
          version="1.2"
          baseProfile="tiny"
          width="500"
          height="587"
          viewBox="0 0 800 887"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g className="municipios" id="28MUE250GC_SIR">
            {cities &&
              cities.map((city, index) => (
                <path
                  key={city.id}
                  id={city.id}
                  fill="#11183D"
                  stroke="#D3D3D3"
                  opacity={citiesOpacity[index]}
                  name={city.name}
                  d={city.geometry}
                />
              ))}
          </g>
        </svg>
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
