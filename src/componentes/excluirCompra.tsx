import React, { Component, FormEvent } from 'react';

type Props = {};

type State = {};

class ExcluirCompra extends Component<Props, State> {
  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h4>Excluir Compra</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input id="idCompra" type="text" />
            <label htmlFor="idCompra">ID da Compra</label>
          </div>
          <button className="btn red" type="submit">Excluir</button>
        </form>
      </div>
    );
  }
}

export default ExcluirCompra;
