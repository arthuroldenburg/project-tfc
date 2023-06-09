import TeamModel, { TeamsAtt } from '../database/models/teams';

export default class TeamService {
  static async getAll(): Promise<TeamsAtt[]> {
    const teams = await TeamModel.findAll();
    return teams;
  }

  static async getOne(id: number): Promise<TeamModel | null> {
    const team = await TeamModel.findOne({ where: { id } });
    return team;
  }
}
