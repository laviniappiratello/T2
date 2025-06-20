import React, { Component, FormEvent } from 'react';

type Props = {};

type State = {};

class DeletarProduto extends Component<Props, State> {
  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //aqui vai a logica para deletar produto dps
  };

  render() {
    return (
      <div className="container">
        <h4>Deletar Produto</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input id="idProduto" type="text" />
            <label htmlFor="idProduto">ID do Produto</label>
          </div>
          <button className="btn red" type="submit">Excluir</button>
        </form>
      </div>
    );
  }
}

export default DeletarProduto;
