import React, { Component } from 'react';

class CadastroProduto extends Component {
  render() {
    return (
      <div className="container">
        <h4>Cadastrar Produto</h4>
        <form>
          <div className="input-field">
            <input id="nomeProduto" type="text" />
            <label htmlFor="nomeProduto">Nome do Produto</label>
          </div>
          <div className="input-field">
            <input id="preco" type="number" />
            <label htmlFor="preco">Preço</label>
          </div>
          <button className="btn">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default CadastroProduto;
