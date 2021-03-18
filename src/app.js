import './bootstrap';
import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import Youch from 'youch';
import 'express-async-errors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.sever = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.sever.use(helmet());
    this.sever.use(cors());
    this.sever.use(json());
  }

  routes() {
    this.sever.use(routes);
  }

  exceptionHandler() {
    this.sever.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV == 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Erro do Servidor Interno' });
    });
  }
}

export default new App().sever;
