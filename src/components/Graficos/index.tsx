import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './styles.css';

class Graficos extends Component {

  render() {
    return (
      <div className="grafico">
        {/*<div className="pie">
          <h1>Número de casos confirmados por sexo</h1>
          <Chart
            options={{ labels: ['Masculino', 'Feminino'], fill:{colors:["#11183d", "#f00", "white"]} }}
            series={[1148, 851]}
            type="pie"

          />
        </div>
        <div className="donut">
          <h1>Número de óbitos confirmados por sexo</h1>
          <Chart
            options={{ labels: ['Masculino', 'Feminino'], fill:{colors:["#11183d", "#f00", "white"]} }}
            series={[1148, 851]}
            type="donut"
          />
    </div>*/}
        <div className="line">
        <div className="bar">
          <h1>Comparação do município selecionado</h1>
          <Chart
            options={{
              chart: {
                id: 'basic-bar',
              },
              xaxis: {
                categories: [
                  'Mínimo',
                  'Município Selecionado',
                  'Média',
                  'Máximo',
                ],
              },
              fill:{colors:["#11183d"]}
            }}
            series={[
              {
                name: 'Valor',
                data: [40, 200, 400, 1000],
              },
            ]}
            type="bar"
          />
        </div>
          <h1>Número de casos confirmados acumulados</h1>
          <Chart
            options={{
              chart: {
                type: 'bar',
              },
              xaxis: {
                categories: [
                  '05/2020',
                  '06/2020',
                  '07/2020',
                  '08/2020',
                  '09/2020',
                ],
              },
              //theme:'palette5',
              fill:{colors:["#11183d"]}
              //fill:["#11183d"]
              }
            }
            series={[
              {
                name: 'series-1',
                data: [3343, 15675, 40139, 67701, 75203],
              },
            ]}
            type="bar"
          />
        </div>
      </div>
    );
  }
}

export default Graficos;
