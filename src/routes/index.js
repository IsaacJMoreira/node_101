const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('A primeira vez a gente não esquece!!! 🔥 ');
    console.log("rodei o primeiro get nessa porra!");
});

routes.get('/listar', (req, res)=>{ 
    res.json({
        "artista": 'GoGo Penguin',
        "comentario": "A melhor banda de todas!!! 🎵 "
    });
    console.log("Rodando um segundo fucking GET com o express!!! 🔥");

});

routes.get('/:number1/:number2/add', (req, res)=>{
    let num1 = req.params['number1'];
    let num2 = req.params['number2'];
    let result = (Number(num1) + Number(num2)).toString();
    res.send(result);
    console.log("Calculei: " + num1 +" + " + num2 + " = " + result);
});

module.exports = routes;