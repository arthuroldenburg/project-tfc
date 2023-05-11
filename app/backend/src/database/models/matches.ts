import { Model, BOOLEAN, INTEGER } from 'sequelize';
import db from '.';

class matches extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: { type: INTEGER, allowNull: false },
  homeTeamGoals: { type: INTEGER, allowNull: false },
  awayTeamId: { type: INTEGER, allowNull: false },
  awayTeamGoals: { type: INTEGER, allowNull: false },
  inProgress: { type: BOOLEAN, allowNull: false },
}, {
  sequelize: db,
  modelName: 'matches',
  underscored: true,
  timestamps: false,
});

export default matches;
