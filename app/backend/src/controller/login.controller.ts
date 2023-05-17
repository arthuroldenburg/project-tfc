import { Request, Response } from 'express';
import { createToken } from '../token/create.token';
import statusCodes from '../statusCodes';
import UserService from '../service/user.service';

export default class LoginController {
  public static async login(req: Request, res: Response) {
    const { email } = req.body;
    const token = createToken(email);
    return res.status(statusCodes.ok).json({ token });
  }

  static async loginRole(req: Request, res: Response) {
    const { email } = req.body;
    const role = await UserService.findOneRole(email);
    return res.status(statusCodes.ok).json({ role });
  }
}
