import React, { Component } from 'react';

type Props = {};

type State = {};

class AnaliseGenero extends Component<Props, State> {
  render() {
    return (
      <div className="container">
        <h4>Análise por Gênero</h4>
        <table className="striped">
          <thead>
            <tr>
              <th>Gênero</th>
              <th>Quantidade</th>
              <th>Consumo Médio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Masculino</td>
              <td>100</td>
              <td>R$ 200,00</td>
            </tr>
            <tr>
              <td>Feminino</td>
              <td>120</td>
              <td>R$ 250,00</td>
            </tr>
            <tr>
              <td>Outro</td>
              <td>10</td>
              <td>R$ 180,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AnaliseGenero;
