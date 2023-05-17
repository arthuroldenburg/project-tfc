import { Request, Response } from 'express';
import { createToken } from '../token/create.token';
import statusCodes from '../statusCodes';
// import UserService from '../service/user.service';

export default class LoginController {
  public static async login(req: Request, res: Response) {
    const { email } = req.body;
    // if (!email || !password) {
    //   return res.status(statusCodes.badRequest).json({ message: 'All fields must be filled' });
    // }
    // const error = await UserService.checkOne(email, password);
    // if (error.type) return res.status(error.type).json({ message: error.message });
    const token = createToken(email);
    return res.status(statusCodes.ok).json({ token });
  }
}
