const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('A primeira vez a gente não esquece!!! 🔥 ');
    console.log("rodei o primeiro get nessa porra!");
});

module.exports = routes;