//⚠ cuidado quando usar esse tipo de iport. usar o sucrase
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes);

app.listen(3000, ()=> console.log("TÔ RODANDO, PORRA!!!"));