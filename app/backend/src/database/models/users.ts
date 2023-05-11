import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class users extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: { type: STRING(30), allowNull: false },
  role: { type: STRING(30), allowNull: false },
  email: { type: STRING(30), allowNull: false },
  password: { type: STRING(30), allowNull: false },
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

export default users;
