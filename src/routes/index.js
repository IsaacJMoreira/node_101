const express = require('express');
const produtoController = require( "../controllers/produtoController.js");
const requestLog = require('../middlewares/requestLog.js');
const bloqueio = require('../middlewares/bloqueio.js');
const routes = express.Router();


///////////////////////////////////////////////////////////

routes.use(express.json());//allows the server to uses JSON encoding

//////////////////////////////////////////////////////////
/*                     GET ROUTES                       */
//////////////////////////////////////////////////////////

routes.get('/produto/lista', requestLog, bloqueio, produtoController.listarProdutos );

//////////////////////////////////////////////////////////
/*                     POST ROUTES                      */
//////////////////////////////////////////////////////////

routes.post('/produto/criar', produtoController.cadastrarProduto);

//////////////////////////////////////////////////////////
/*                    DELETE ROUTES                     */
//////////////////////////////////////////////////////////

routes.delete('/produto/:id/deletar', produtoController.deletarProduto);

//////////////////////////////////////////////////////////
/*                      PUT ROUTES                      */
//////////////////////////////////////////////////////////

routes.put('/produto/:id/atualizar', produtoController.atualizarProduto);

//////////////////////////////////////////////////////////
/*        THE MODULE MUST BE EXPORTED AT THE END        */
//////////////////////////////////////////////////////////
module.exports = routes;