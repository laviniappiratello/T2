import React, { Component } from 'react';

type Props = {};

type State = {};

class ListaCompraCliente extends Component<Props, State> {
  render() {
    return (
      <div className="container">
        <h4>Lista de Compras do Cliente</h4>
        <table className="striped">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Preço Unit.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Produto A</td>
              <td>2</td>
              <td>R$ 50,00</td>
              <td>R$ 100,00</td>
            </tr>
            <tr>
              <td>Produto B</td>
              <td>1</td>
              <td>R$ 30,00</td>
              <td>R$ 30,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListaCompraCliente;
