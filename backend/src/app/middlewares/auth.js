import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

function authMiddleware(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).json({ error: 'Token não fornecido' });

  const token = authToken.split(' ')[1];

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Token inválido' });

    req.userId = decoded.id;
    req.userName = decoded.name;

    next();
  });
}

export default authMiddleware;
