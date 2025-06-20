import React, { Component } from 'react';

class DeletarCliente extends Component {
  render() {
    return (
      <div className="container">
        <h4>Excluir Cliente</h4>
        <form>
          <div className="input-field">
            <input id="idCliente" type="text" />
            <label htmlFor="idCliente">ID do Cliente</label>
          </div>
          <button className="btn red">Excluir</button>
        </form>
      </div>
    );
  }
}

export default DeletarCliente;
