import { NextFunction, Request, Response } from 'express';
import UserService from '../service/user.service';
import { validateLogin } from './validation/schema';

const LoginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const error = validateLogin(email, password);
  if (error.type) return res.status(error.type).json({ message: error.message });
  const { type, message } = await UserService.checkOne(email, password);
  if (type) return res.status(type).json({ message });
  next();
};

export default LoginMiddleware;
