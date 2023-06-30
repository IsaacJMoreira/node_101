const Produtos = require('../models/Produtos.js');



const produtoController = {
    listarProdutos: async (req, res) => {

        const listaDeProdutos = await Produtos.findAll();

        res.json(listaDeProdutos);

        console.log("A GET request was successfully fulfilled.");
    },//NOTE ESSS SINTAXE! Separamos os métodos escritos como objetos com virgulas

    cadastrarProduto: async (req, res) => {
        const {nome, preco, quantidade} = req.body;

        const novoProduto = await Produtos.create({
            nome, 
            preco, 
            quantidade
        });

        console.log("POST resquest fulfilled. A new product was inserted into database.");
        res.json(novoProduto);        
    }
}

module.exports =  produtoController;//🛫 