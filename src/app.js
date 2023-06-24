//⚠ cuidado quando usar esse tipo de iport. usar o sucrase
import express from 'express';
import routes from './routes';

class App{
    constructor(){//construtor 👷 
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}



export default new App().server;//exports the class to be used
                                // in other files 🛫 

                                //this is my branch 🕶 