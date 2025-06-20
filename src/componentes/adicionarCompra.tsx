import React, { Component, FormEvent } from 'react';

type Props = {};

type State = {};

class AdicionarCompra extends Component<Props, State> {
  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Futuramente, lógica para adicionar compra aqui
  };

  render() {
    return (
      <div className="container">
        <h4>Adicionar Compra</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input id="idProduto" type="text" />
            <label htmlFor="idProduto">ID do Produto</label>
          </div>
          <div className="input-field">
            <input id="quantidade" type="number" min="1" />
            <label htmlFor="quantidade">Quantidade</label>
          </div>
          <button className="btn" type="submit">Adicionar</button>
        </form>
      </div>
    );
  }
}

export default AdicionarCompra;
