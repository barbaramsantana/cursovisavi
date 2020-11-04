import React, { Component } from "react";
import Chart from "react-apexcharts";
import './styles.css';


class Graficos extends Component {
    
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
        options: {labels: ['A', 'B', 'C', 'D', 'E']},
        series: [44, 55, 41, 17, 15],
        
    }
  }

  render() {
    return (
          <div className='grafico'>
            <div className='pie'>
              <h1>Número de casos confirmados por sexo</h1>
              <Chart
                options={{labels: ['Masculino', 'Feminino']}}
                series={[1148, 851]}
                type="pie"
              />
            </div>
            <div className="donut">
              <h1>Número de óbitos confirmados por sexo</h1>
              <Chart
                options={{labels: ['Masculino', 'Feminino']}}
                series={[1148, 851]}
                type="donut"
              />
            </div>
            <div className="line">
              <h1>Número de casos confirmados acumulados</h1>
              <Chart
                options={{
                  chart: {
                    id: "basic-bar"
                  },
                  xaxis: {
                    categories: ["05/2020", "06/2020", "07/2020", "08/2020", "09/2020"]
                  }
                }}
                series={[
                  {
                    name: "series-1",
                    data: [3343, 15675, 40139, 67701, 75203]
                  }
                ]}
                type="line"
              />
            </div>
            <div className='bar'>
              <h1>Número de casos confirmados por Raça</h1>
              <Chart
                options={{
                  chart: {
                    id: "basic-bar"
                  },
                  xaxis: {
                    categories: ["Amarela", "Branco", "Indígena Xocó", "Parda", "Preta", "Não Informado"]
                  }
                }}
                series={[
                  {
                    name: "series-1",
                    data: [8398, 6828, 87, 25520, 1772, 33748]
                  }
                ]}
                type="bar"
              />
              
            </div>
          </div>
    );
  }
}

export default Graficos;