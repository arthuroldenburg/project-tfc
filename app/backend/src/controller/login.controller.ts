import { Request, Response } from 'express';
import { createToken } from '../token/create.token';
import statusCodes from '../statusCodes';

export default class LoginController {
  public static login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(statusCodes.badRequest).json({
        message: 'All fields must be filled' });
    }
    const token = createToken(email);
    return res.status(statusCodes.ok).json({ token });
  }
}
