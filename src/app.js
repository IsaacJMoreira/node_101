//⚠ cuidado quando usar esse tipo de iport. usar o sucrase
const express = require('express');//includes the express functionality
const routes = require('./routes');//import the routes from the  /routes directory
const app = express();

app.use(routes);//uses the routes imported from the /routes directory

app.listen(3000, ()=> console.log("🔥🔥🔥 TÔ RODANDO!!! 🔥🔥🔥"));//logs the success on the screen