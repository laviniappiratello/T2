import React, { Component } from 'react';

class EditarCliente extends Component {
  render() {
    return (
      <div className="container">
        <h4>Editar Cliente</h4>
        <form>
          <div className="input-field">
            <input id="nome" type="text" />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className="input-field">
            <input id="email" type="email" />
            <label htmlFor="email">Email</label>
          </div>
          <button className="btn">Salvar</button>
        </form>
      </div>
    );
  }
}

export default EditarCliente;
