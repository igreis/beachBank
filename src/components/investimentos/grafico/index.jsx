import React, { Component } from "react";
import Chart from "react-apexcharts";

class Grafic extends Component {
  constructor(props) {
    super(props);
    this.lista = ['1°mês', '2°mês', '3°mês', '4°mês', '5°mês', '6°mês', '7°mês', '8°mês', '9°mês', '10°mês', '11°mês', '12°mês']
    let { periodo, dados } = this.props;
    this.lista2 = this.lista.slice(0, periodo)

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: this.lista2,
          labels : {
            style : {
              colors: '#6694b9'
            }
          }
        },
        yaxis : {
          labels: {
            style : {
              colors: '#6694b9'
            }
          }
        }
      },
      series: [
        {
          name: "series-1",
          data: dados.slice(0, periodo)
        }
      ]
    };
    
  }



  componentDidUpdate(prevProps) { //atualiza sempre q as props atualizam
    //Verifica se a props mudou
    if (prevProps.periodo != this.props.periodo || prevProps.dados != this.props.dados) {
      //atualiza a lista com o novo periodo
      const listaAtualizada = this.lista.slice(0, this.props.periodo)
      const dadosAtualizado = this.props.dados.slice(0, this.props.periodo)

      this.setState((prevState) => ({
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.xaxis,
            categories: listaAtualizada
          },
        },
        series: [
          {
          data: dadosAtualizado
          }
        ]
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              max-width="1150"
              height="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Grafic;

