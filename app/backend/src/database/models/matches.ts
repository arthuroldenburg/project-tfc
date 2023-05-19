import { Model, DataTypes } from 'sequelize';
import db from '.';
import teams from './teams';

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
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: { type: DataTypes.INTEGER, allowNull: false },
  homeTeamGoals: { type: DataTypes.INTEGER, allowNull: false },
  awayTeamId: { type: DataTypes.INTEGER, allowNull: false },
  awayTeamGoals: { type: DataTypes.INTEGER, allowNull: false },
  inProgress: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 'true' },
}, {
  sequelize: db,
  modelName: 'matches',
  underscored: true,
  timestamps: false,
});

matches.belongsTo(teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });

matches.belongsTo(teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

teams.hasMany(matches, { foreignKey: 'awayTeamId', as: 'awayMatches' });

teams.hasMany(matches, { foreignKey: 'homeTeamId', as: 'homeMatches' });

export default matches;
