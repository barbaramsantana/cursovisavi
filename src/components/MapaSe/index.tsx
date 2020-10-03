import React, { useCallback } from 'react';
import { Map, GeoJSON } from 'react-leaflet';

import mapaData from '../../data/json_geojs-sergipe.json';

import 'leaflet/dist/leaflet.css';
import { Container, Title } from './styles';

const MapaSE: React.FC = () => {
  const stateStyle = {
    color: '#11183D',
    wheight: 1,
  };

  const onEachState = useCallback((state, layer) => {
    const stateName = state.properties.name;
    const stateID = state.properties.id;
    layer.bindPopup('Cidade: ' + stateName + ' id: ' + stateID);
    layer.on({
      mouse: (event: any) => {
        event.mouse('Cidade: ' + stateName + ' id: ' + stateID);
      },
    });
    layer.options.fillOpacity = Math.random();
  }, []);

  return (
    <Container>
      <Title style={{ textAlign: 'center' }}></Title>
      <Map style={{ height: '80vh' }} zoom={8.4} center={[-10.5, -37.3]}>
        <GeoJSON
          style={stateStyle}
          data={mapaData.features}
          onEachFeature={onEachState}
        />
      </Map>
    </Container>
  );
};

export default MapaSE;
