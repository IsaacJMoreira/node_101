const produtoController = {
    listarProdutos: (req, res) => {

        const dummyResponse = [
            {
                "nome": "produto 1"
            },
            {
                "nome": "produto 2"
            }
        ]

        res.json(dummyResponse)
        console.log("A GET request was successfully fulfilled. Returned Data: " + dummyResponse);
    },//NOTE ESSS SINTAXE! Separamos os métodos escritos como objetos com virgulas

    cadastrarProduto: (req, res) => {
        console.log("POST resquest fulfilled. Created a new user. Data received: "+ req.body);
        res.json("Produto Cadastrado!");        
    }
}

module.exports =  produtoController;//🛫 