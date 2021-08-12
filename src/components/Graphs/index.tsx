import React from 'react';
import Chart from 'react-apexcharts';
import { ICovidInfoDTO } from '../../dtos/Covid';

import { Container, Line, Bar, Title } from './styles';

interface IProps {
  covidInfo: ICovidInfoDTO;
  value: number;
}

const Graphs: React.FC<IProps> = ({ covidInfo, value }) => {
  return (
    <Container>
      <Line>
          {
        <Bar>
          <Title>Comparação do município selecionado</Title>
          <Chart
          options={{
            chart: {
              id: 'basic-bar',
            },
            xaxis: {
              categories: [
                'Município com valor mínimo',
                'Município Selecionado',
                'Média dos municípios',
                'Município com valor Máximo',
              ],
            },
            fill: { colors: ['#11183d'] },
          }}
          series={[
            {
              name: 'Valor',
              data: [covidInfo.min, value, covidInfo.med, covidInfo.max],
            },
          ]}
          type="bar"
          />
        </Bar>
      }
          </Line>
    </Container>
  );
};
export default Graphs;
