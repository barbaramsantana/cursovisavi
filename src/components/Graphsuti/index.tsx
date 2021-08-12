import React from 'react';
import Chart from 'react-apexcharts';
import { ILeitoDTO } from '../../dtos/Covid';

import { Container, Line, Bar, Title } from './styles';

interface IProps {
  value: string;
  citiesLeito: ILeitoDTO;
}

const Graphsuti: React.FC<IProps> = ({ value, citiesLeito }) => {
  console.log("grafico");
  console.log(citiesLeito);
  return (
    <Container>
      <Line>
          <Bar>
          <Title>Número total de leitos de {value} em Sergipe</Title>
          <Chart
            options={{
              chart: {
                id:'radialBar'
              },
              stroke: {
                curve: 'smooth'
              },
              tooltip: {
                shared: true,
                intersect: false
              },
              xaxis: {
                categories: [citiesLeito.date],
              },
              colors: ['#11183d', 'red'],
            }}
            series={ [{name:'Disponibilizado', data:[citiesLeito.totHospitalBeds_available]},{name:'Ocupado', data:[citiesLeito.totHospitalBeds_occupied]}] }
            type="area"
            width="700"
            />
            </Bar>
      </Line>
      <Line>
          {
        <Bar>
          <Title>Internados em {value} SUS ao longo do tempo</Title>
          <Chart
            options={{
              chart: {
                id:'radialBar'
              },
              stroke: {
                curve: 'smooth'
              },
              tooltip: {
                shared: true,
                intersect: false
              },
              xaxis: {
                categories: [citiesLeito.date],
              },
              colors: ['#11183d', 'red'],
            }}
            series={ [{name:'Ocupado', data:[citiesLeito.totAdmittedSUS_UTI]}] }
            type="area"
            width="700"
            />
        </Bar>
      }
          </Line>
          <Line>
          {
        <Bar>
          <Title>Internados em {value} PRIVADO ao longo do tempo</Title>
          <Chart
            options={{
              chart: {
                id:'radialBar'
              },
              stroke: {
                curve: 'smooth',
              },
              tooltip: {
                shared: true,
                intersect: false
              },
              xaxis: {
                categories: [citiesLeito.date],
              },
              colors: ['#11183d', 'red'],
            }}
            series={ [{name:'Ocupado', data:[citiesLeito.totAdmittedPrivate_UTI]}] }
            type="area"
            width="700"
            />
        </Bar>
      }
          </Line>
    </Container>
  );
};
export default Graphsuti;
