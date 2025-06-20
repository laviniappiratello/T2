import React, { Component } from 'react';

type Props = {};
type State = {};

export default class MaisConsumidosPorGenero extends Component<Props, State> {
  render() {
    return (
      <div className="container">
        <h4>Mais Consumidos por Gênero</h4>
        <table className="striped">
          <thead>
            <tr>
              <th>Gênero</th>
              <th>Produto</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Masculino</td>
              <td>Selagem</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Feminino</td>
              <td>Unha press on nails</td>
              <td>55</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>Corte emo</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Feminino</td>
              <td>Franja vegana</td>
              <td>48</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
