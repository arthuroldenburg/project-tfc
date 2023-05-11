import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class teams extends Model {
  declare id: number;
  declare teamName: string;
}

teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: { type: STRING(30), allowNull: false },
}, {
  sequelize: db,
  modelName: 'teams',
  underscored: true,
  timestamps: false,
});

export default teams;
