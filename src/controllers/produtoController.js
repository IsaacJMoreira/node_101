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
    },
    
    deletarProduto: async (req, res)=>{
        const { id } = req.params;
        console.log(`Tentarei deletar o registro de ID = ${id}`);
        await Produtos.destroy({
            where: {
                id,//⚠ a variável a ser testada te o mesmo nome da variável a ser passada, não precisa fazer id = id, por exemplo
            }
        });
        console.log(`DELETE request fulfilled. Product with id = ${id} is no longer part of the Data Bank.`);
        res.json(`Product with id = ${id} is no longer part of the Data Bank.`);
    }, 

    atualizarProduto: async (req, res) => {
        const { id } = req.params;
        const {nome, preco, quantidade} = req.body;

        const produtoAtualizado = await Produtos.update(
            {nome, preco, quantidade},
            {
                where: {
                    id,
                }
            }
        );
        
        console.log(`A UPDATE request was fulfilled. The product with id = ${id} is now updated.`);
        res.json(produtoAtualizado);
    }
}

module.exports =  produtoController;//🛫 