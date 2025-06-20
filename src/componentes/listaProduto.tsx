import React, { Component } from 'react';

type Props = {};

type State = {};

class ListaProduto extends Component<Props, State> {
  render() {
    return (
      <div className="container">
        <h4>Lista de Produtos</h4>
        <ul className="collection">
          <li className="collection-item">Cortar</li>
          <li className="collection-item">Pintar</li>
          <li className="collection-item">Unhas</li>
          <li className="collection-item">Maquiagem</li>
        </ul>
      </div>
    );
  }
}

export default ListaProduto;
