import React, { Component } from 'react';

type Props = {};
type State = {};

export default class Top5Valor extends Component<Props, State> {
  render() {
    return (
      <div className="container">
        <h4>Top 5 Produtos por Valor</h4>
        <ul className="collection">
          <li className="collection-item">Corte pixie - R$ 500,00</li>
          <li className="collection-item">Corte scene - R$ 450,00</li>
          <li className="collection-item">Corte mullet - R$ 430,00</li>
          <li className="collection-item">Corte wolfcut - R$ 410,00</li>
          <li className="collection-item">Corte babybangs - R$ 390,00</li>
        </ul>
      </div>
    );
  }
}
