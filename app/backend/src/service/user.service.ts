import statusCodes from '../statusCodes';
import UserModel from '../database/models/users';

type findUser = {
  type: number | null,
  message: string
};

export default class UserService {
  public static async checkOne(email: string, password: string): Promise<findUser> {
    const user = await UserModel.findOne({ where: { email, password } });
    if (!user) return { type: statusCodes.unauthorized, message: 'Invalid email or password' };
    return { type: null, message: '' };
  }
}
