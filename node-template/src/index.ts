import "reflect-metadata";
import express from 'express';
import 'express-async-errors';
import {createConnection} from "typeorm";
import routes from './routes';
import { globalErros } from './middlewares/globalErros';

createConnection().then(async connection => {
    const app = express();
    const PORT = 3333;
  
    app.use(express.json());
    app.use(routes);
  
    app.use(globalErros)
  
    app.listen(PORT, () => {
    console.log(`[server]: server is running at http://localhost:${PORT}`);
    });
}).catch(error => {
    console.log("Unable to connect to the database", error );
});
