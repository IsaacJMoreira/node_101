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

module.exports = routes;