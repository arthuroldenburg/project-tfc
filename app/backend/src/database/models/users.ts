import { Model, DataTypes } from 'sequelize';
import db from '.';

export interface UsersAtt {
  id: number,
  username: string,
  role: string,
  email: string,
  password: string
}

export type CreateTeamAtt = Omit<UsersAtt, 'id'>;
class users extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

users.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: { type: DataTypes.STRING(30), allowNull: false },
  role: { type: DataTypes.STRING(30), allowNull: false },
  email: { type: DataTypes.STRING(30), allowNull: false },
  password: { type: DataTypes.STRING(30), allowNull: false },
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

export default users;
