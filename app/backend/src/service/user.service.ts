import * as bcrypt from 'bcryptjs';
import statusCodes from '../statusCodes';
import UserModel from '../database/models/users';

type findUser = {
  type: number | null,
  message: string
};

export default class UserService {
  public static async checkOne(email: string, password: string): Promise<findUser> {
    const user = await UserModel.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return {
        type: statusCodes.unauthorized, message: 'Invalid email or password' };
    }
    return { type: null, message: '' };
  }

  static async findOneRole(email: string): Promise<UserModel | undefined> {
    const user = await UserModel.findOne({ where: { email } });
    if (user) return user.dataValues.role;
  }
}
