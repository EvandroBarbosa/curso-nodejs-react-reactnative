import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authconfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: 'Token no provider' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authconfig.secret);

    req.userId = decoded.id;

    next();
  } catch (error) {
    res.status(401).json({ error: 'Token invalid!' });
  }
};
