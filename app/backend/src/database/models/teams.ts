import { Model, DataTypes } from 'sequelize';
import db from '.';

export interface TeamsAtt {
  id: number,
  teamName: string
}

export type CreateTeamAtt = Omit<TeamsAtt, 'id'>;

class teams extends Model<TeamsAtt, CreateTeamAtt> {
  declare id: number;
  declare teamName: string;
}

teams.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: { type: DataTypes.STRING(30), allowNull: false },
}, {
  sequelize: db,
  modelName: 'teams',
  underscored: true,
  timestamps: false,
});

export default teams;
