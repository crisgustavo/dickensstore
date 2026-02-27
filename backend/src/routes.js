import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';
import './routes';

const routes = new Router();
const upload = multer();

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'API acessada com sucesso' });
});
