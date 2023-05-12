// import fs from 'fs/promises';
// import path from 'path';
// import Team, {CreateTeamAtt} from '../database/models/teams';

import TeamModel, { TeamsAtt } from '../database/models/teams';

export default class TeamService {
  public static async getAll(): Promise<TeamsAtt[]> {
    const teams = await TeamModel.findAll();
    return teams;
  }

  public static async getOne(id: number): Promise<any> {
    const team = await TeamModel.findOne({ where: { id } });
    return team;
  }

  // public static async create(team: CreateTeamAtt): Promise<TeamsAtt> {
  //   const teamCreated = await TeamModel.create(team);
  //   return teamCreated.toJSON();
  // }
}
