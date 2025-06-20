import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h4 className="center-align pink-text text-darken-2">World Beauty</h4>

      <div className="card-panel pink lighten-5 z-depth-1">
        <h5 className="pink-text text-darken-2">Clientes</h5>
        <ul className="collection">
          <li className="collection-item"><Link to="/clientes">Lista de Clientes</Link></li>
          <li className="collection-item"><Link to="/clientes/cadastrar">Cadastrar Cliente</Link></li>
          <li className="collection-item"><Link to="/clientes/editar">Editar Cliente</Link></li>
          <li className="collection-item"><Link to="/clientes/excluir">Excluir Cliente</Link></li>
        </ul>
      </div>

      <div className="card-panel pink lighten-5 z-depth-1">
        <h5 className="pink-text text-darken-2">Produtos</h5>
        <ul className="collection">
          <li className="collection-item"><Link to="/produtos/cadastrar">Cadastrar Produto</Link></li>
          <li className="collection-item"><Link to="/produtos/editar">Editar Produto</Link></li>
          <li className="collection-item"><Link to="/produtos/deletar">Deletar Produto</Link></li>
          <li className="collection-item"><Link to="/lista/produto">Listar Produtos</Link></li>
          <li className="collection-item"><Link to="/top5valor">Top 5 por Valor</Link></li>
          <li className="collection-item"><Link to="/maisconsumidos">Mais Consumidos</Link></li>
          <li className="collection-item"><Link to="/maisconsumidosgenero">Mais Consumidos por Gênero</Link></li>
        </ul>
      </div>

      <div className="card-panel pink lighten-5 z-depth-1">
        <h5 className="pink-text text-darken-2">Compras</h5>
        <ul className="collection">
          <li className="collection-item"><Link to="/compras/adicionar">Adicionar Compra</Link></li>
          <li className="collection-item"><Link to="/compras/excluir">Excluir Compra</Link></li>
          <li className="collection-item"><Link to="/compra/cliente">Compras por Cliente</Link></li>
        </ul>
      </div>

      <div className="card-panel pink lighten-5 z-depth-1">
        <h5 className="pink-text text-darken-2">Análises</h5>
        <ul className="collection">
          <li className="collection-item"><Link to="/analise/top10">Top 10 que mais consomem</Link></li>
          <li className="collection-item"><Link to="/analise/bottom10">10 que menos consomem</Link></li>
          <li className="collection-item"><Link to="/analise/genero">Análise por Gênero</Link></li>
        </ul>
      </div>
    </div>
  );
}
