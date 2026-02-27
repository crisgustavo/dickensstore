import express from 'express';
import cors from 'cors';
import routes from './routes';
import { resolve } from 'node:path';

import './database';

class App {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
  }
}
