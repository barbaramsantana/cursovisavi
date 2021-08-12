import React from 'react';
import Chart from 'react-apexcharts';
import { IVacineDTO } from '../../dtos/Covid';

import { Container, Line, Bar, Title } from './styles';

interface IProps {
  value: string;
  vacineInfo: IVacineDTO;
}

const GraphsVacina: React.FC<IProps> = ({ value , vacineInfo}) => {
  console.log(vacineInfo);
  return (
    <Container>
      <Line>
        {/*
          <Bar>
          <Title>Comparação do municipio com o estado</Title>
          <Chart
            options={{
              chart: {
                id:'radialBar'
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                  dataLabels: {
                    position: 'top',
                  },
                }
              },
              dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                  fontSize: '12px',
                  colors: ['#fff']
                }
              },
              stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
              },
              tooltip: {
                shared: true,
                intersect: false
              },
              xaxis: {
                categories: ["Municipio", "Estado"],
              },
              colors: ['#11183d', '#39539E', '#0084ff', '#0077B5'],
            }}
            series={ [{name:"População Total", data:[1000, 3000]},{name:"doses recebidas", data:[550, 1500]}, {name:"doses aplicadas", data:[350, 1000]}] }
            type="bar"
            />
          </Bar>*/}
      </Line>
      <Line>
          <Bar>
          <Title> Curva de recebimento e aplicação de vacinas</Title>
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
                categories: [vacineInfo.date],
              },
              colors: ['#0077B5', '#00a000', 'red'],
            }}
            series={ [{name:"Doses distribuidas", data:[vacineInfo.totDosesSent_1]},{name:"doses aplicadas", data:[vacineInfo.totDosesApply_1]}, {name:"doses não aplicadas", data:([vacineInfo.totDosesSent_1 - vacineInfo.totDosesApply_1])}] }
            type="area"
            />
            </Bar>
      </Line>
      <Line>
        {/*  <Bar>
          <Title>Porcentagem da população municipal vacinada</Title>
          <Chart
            options={{
              
              chart: {
                id:'radialBar',
                offsetY: -20,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -90,
                  endAngle: 90,
                  track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                      enabled: false,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                    }
                  },
                  dataLabels: {
                    name: {
                      show: false
                    },
                    value: {
                      offsetY: -2,
                      fontSize: '22px'
                    }
                  }
                }
              },
              grid: {
                padding: {
                  top: -10
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  shadeIntensity: 0.4,
                  gradientToColors: ['#11183d', '#39539E', '#0084ff', '#ABE5A1'],
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100]
                },
              },
              
              labels: ['Aplicadas no município'],
            }}
            series={ [25] }
            type="radialBar"
          />
            </Bar>*/}
      </Line>
    </Container>
  );
};
export default GraphsVacina;
