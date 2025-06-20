import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// caso de aquele erro dnv
//npm install react-router-dom

import Home from './componentes/home';
import FormularioCadastroCliente from './componentes/formularioCadastroCliente';
import ListaCliente from './componentes/listaCliente';
import EditarCliente from './componentes/editarCliente';
import DeletarCliente from './componentes/deletarCliente';
import CadastroProduto from './componentes/cadastroProduto';
import AdicionarCompra from './componentes/adicionarCompra';
import DeletarProduto from './componentes/deletarProduto';
import EditarProduto from './componentes/editarProduto';
import ExcluirCompra from './componentes/excluirCompra';
import AnaliseBottom10 from './componentes/analiseBottom10';
import AnaliseGenero from './componentes/analisePorGenero';
import AnaliseTop10 from './componentes/analiseTop10';
import ListaProduto from './componentes/listaProduto';
import MaisConsumidosPorGenero from './componentes/produtosMaisConsumidosPorGenero';
import ProdutosMaisConsumidos from './componentes/produtosMaisConsumidos';
import Top5Valor from './componentes/top5Valor';


function Roteador() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes/cadastrar" element={<FormularioCadastroCliente tema="claro" />} />
        <Route path="/clientes" element={<ListaCliente tema="claro" />} />
        <Route path="/clientes/editar" element={<EditarCliente />} />
        <Route path="/clientes/excluir" element={<DeletarCliente />} />
        <Route path="/produtos/cadastrar" element={<CadastroProduto />} />

        <Route path="/compras/adicionar" element={<AdicionarCompra />} />
        <Route path="/produtos/deletar" element={<DeletarProduto />} />
        <Route path="/produtos/editar" element={<EditarProduto />} />
        <Route path="/compras/excluir" element={<ExcluirCompra />} />
      
        <Route path='/analise/bottom10' element={<AnaliseBottom10/>}></Route>
        <Route path='/analise/genero' element={<AnaliseGenero/>}></Route>
        <Route path='/analise/top10' element={<AnaliseTop10/>}></Route>
        <Route path='/compra/cliente' element={<ListaCliente tema="claro"/>}></Route>
        <Route path='/lista/produto' element={<ListaProduto/>}></Route>
        <Route path='/maisconsumidosporgenero' element={<MaisConsumidosPorGenero/>}></Route>
        <Route path='/maisconsumidos' element={<ProdutosMaisConsumidos/>}></Route>
        <Route path='/top5valor' element={<Top5Valor/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Roteador;
