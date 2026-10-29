import multer from 'multer';
import { extname, resolve } from 'node:path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, callback) =>
      callback(null, req.id + extname(file.originalname)),
  }),
};
