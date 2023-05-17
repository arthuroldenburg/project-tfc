import { NextFunction, Request, Response } from 'express';
import { validateLogin } from './validation/schema';

const LoginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const error = validateLogin(email, password);
  console.log('');
  if (error.type) return res.status(error.type).json({ message: error.message });
  next();
};

export default LoginMiddleware;
