import teams from '../database/models/teams';
import MatchesModel from '../database/models/matches';

export default class MatchesService {
  static async getAll(): Promise<MatchesModel[]> {
    const matches = await MatchesModel.findAll({ include: [
      { model: teams, as: 'homeTeam', attributes: ['teamName'] },
      { model: teams, as: 'awayTeam', attributes: ['teamName'] },
    ] });
    return matches;
  }

  static async finishMatch(id: number): Promise<void> {
    await MatchesModel.update({ inProgress: false }, { where: { id } });
  }
}
