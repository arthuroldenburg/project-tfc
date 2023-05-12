import { Request, Response } from 'express';
import TeamService from '../service/team.service';
import statusCode from '../statusCodes';

class TeamController {
  public static async getAll(_req: Request, res: Response) {
    const teams = await TeamService.getAll();
    return res.status(statusCode.ok).json(teams);
  }

  public static async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const team = await TeamService.getOne(Number(id));
    return res.status(statusCode.ok).json(team);
  }
}

export default TeamController;
