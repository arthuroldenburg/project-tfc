import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import statusCodes from '../statusCodes';

const secret = process.env.JWT_SECRET || 'secret';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(statusCodes.unauthorized).json({ message: 'Token not found' });
  }
  try {
    const decoded = verify(token, secret);
    console.log('DECODADO:  ', decoded);
    if (decoded) {
      req.body = { email: decoded };
      return next();
    }
  } catch (err) {
    return res.status(statusCodes.unauthorized).json({ message: 'Token must be a valid token' });
  }
};
