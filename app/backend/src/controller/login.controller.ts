import { Request, Response } from 'express';
import { createToken } from '../token/create.token';
import statusCodes from '../statusCodes';
import UserService from '../service/user.service';
import decodeToken from '../token/decode.token';

export default class LoginController {
  public static async login(req: Request, res: Response) {
    const { email } = req.body;
    const token = createToken(email);
    return res.status(statusCodes.ok).json({ token });
  }

  static async loginRole(req: Request, res: Response) {
    const token = req.header('Authorization');
    const email = decodeToken(token);
    const role = await UserService.findOneRole(email.toString());
    return res.status(statusCodes.ok).json({ role });
  }
}
