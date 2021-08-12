import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ICovidDTO, ICovidInfoDTO } from '../../dtos/Covid';
import api from '../../services/api';

import { Container, Line, Bar, Title } from './styles';

interface IProps {
  value: string;
  cityvalid: string;
  idcityreal: string;
}
interface CasosAcumulo {
  id_city: string;
  confirmed: number;
  death: number;
  lethality: number;
  incidence: number;
  mortality: number;
  isolation: number;
  date: string;
  __v: number;
  _id: string;
}

const GraphsTime: React.FC<IProps> = ({value, cityvalid, idcityreal}) => {
  ///dadosCovid/covidId/{id}
  //const [casosAcumulados, setCasosAcumulados] = useState<ICovidDTO[]>([]);
  const [casoAcumulo, setCasoAcumulo] = useState<CasosAcumulo>();
  const [casosAcumulados, setCasosAcumulados] = useState<number>(0);
  const [dateAcumulados, setDateAcumulados] = useState<string>("");
  const [Datecasos, setDatecasos] = useState('');
  useEffect(()=>{
    async function loadCasosAc() {
      const response = await api.get(`dadosCovid/covidId/${idcityreal}`);
      //setDateAcumulados(response.data.date);
      //setCasosAcumulados(response.data.confirmed);
      //setCasoAcumulo(response.data);
      //console.log(response.data);
      console.log(response.data.date);
      console.log(response.data.confirmed);
      //setDatecasos(response.data.date);
    }
    loadCasosAc();
  },[]);
  //console.log(idcityreal);
  //console.log(casosAcumulados);
  /*const response = await api.get(
    `dadosCovid/covidId/${cityvalid}`,
  );*/
  /*function typegraph(value){
    if(value = "")
  }*/
  return (
    <Container>
      <Line>
          <Bar>
          <Title>Número de {value} acumulados ao longo do tempo</Title>
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
                categories: {casoAcumulo},
              },
              colors: ['red'],
            }}
            series={ [{name:'Disponibilizado', data:{casoAcumulo}}] }
            type="area"
            />
            </Bar>
      </Line>
      <Line>
          {/*
        <Bar>
          <Title>Número de {value} diários ao longo do tempo</Title>
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
                categories: ["01/05/2021", "10/05/2021", "20/05/2021", "02/06/2021", "10/06/2021", "20/06/2021"],
              },
              colors: ['red'],
            }}
            series={ [{name:'Disponibilizado', data:[100, 96, 94, 92, 100, 96]}] }
            type="area"
            />
        </Bar>
          */ }
          </Line>
    </Container>
  );
};
export default GraphsTime;
