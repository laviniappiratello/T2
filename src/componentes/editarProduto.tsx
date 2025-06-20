import React, { Component, FormEvent } from 'react';

type Props = {};

type State = {};

class EditarProduto extends Component<Props, State> {
  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Lógica para salvar edição do produto futuramente
  };

  render() {
    return (
      <div className="container">
        <h4>Editar Produto</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input id="nomeProduto" type="text" />
            <label htmlFor="nomeProduto">Nome do Produto</label>
          </div>
          <div className="input-field">
            <input id="precoProduto" type="number" step="0.01" />
            <label htmlFor="precoProduto">Preço</label>
          </div>
          <button className="btn" type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default EditarProduto;
