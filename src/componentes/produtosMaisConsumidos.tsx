import React, { Component } from 'react';

type Props = {};
type State = {};

export default class ProdutosMaisConsumidos extends Component<Props, State> {
  render() {
    return (
      <div className="container">
        <h4>Produtos Mais Consumidos</h4>
        <ul className="collection">
          <li className="collection-item">Hidratação - 120 unidades</li>
          <li className="collection-item">Alisamento - 110 unidades</li>
          <li className="collection-item">Sobrancelhas - 90 unidades</li>
          <li className="collection-item">Unhas - 85 unidades</li>
          <li className="collection-item">Maquiagens - 80 unidades</li>
        </ul>
      </div>
    );
  }
}
