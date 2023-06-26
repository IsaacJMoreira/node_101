const express = require('express');
const routes = express.Router();

///////////////////////////////////////////////////////////

const BD = [];//fake databank
routes.use(express.json());//allows the server to uses JSON encoding

//////////////////////////////////////////////////////////
/*                     GET ROUTES                       */
//////////////////////////////////////////////////////////

routes.get('/', (req, res) => {
    console.log("Tentativa de acesso ao BD efetuada.");
    if(BD.length) {
        console.log(`O BD POSSUI: ${BD.length} artista(s) cadastrado(s).`);
        console.log(BD);  
        return res.json(BD);
    }else {
       res.send("DESCULPE, NADA CADSTRADO AINDA"); 
       console.log("BD VAZIO");       
    }
    
});

routes.get('/listar', (req, res)=>{ // I HAVE TO INTEGRATE THIS WITH THE DB (SEQUELIZE)
    res.json({
        "artista": 'GoGo Penguin',
        "comentario": "A melhor banda de todas!!! 🎵 "
    });
    console.log("Rodando um segundo GET com o express!!! 🔥");

});

routes.get('/:number1/:number2/add', (req, res)=>{
    let num1 = req.params['number1'];
    let num2 = req.params['number2'];
    let result = (Number(num1) + Number(num2)).toString();
    res.send("Calculei: " + num1 +" + " + num2 + " = " + result);
    console.log("Calculei: " + num1 +" + " + num2 + " = " + result);
});

//////////////////////////////////////////////////////////
/*                     POST ROUTES                      */
//////////////////////////////////////////////////////////

routes.post('/register', (req, res)=>{
         const {artista, comentario} = req.body;
         const register = {artista, comentario}
         BD.push(register);
    console.log(req.body);
    res.send("Pronto");
});

//////////////////////////////////////////////////////////
/*        THE MODULE MUST BE EXPORTED AT THE END        */
//////////////////////////////////////////////////////////
module.exports = routes;