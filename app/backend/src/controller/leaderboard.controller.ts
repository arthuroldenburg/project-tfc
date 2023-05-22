import { Request, Response } from 'express';
import LeaderBoardService from '../service/leaderBoard.service';

export default class LeaderBoardController {
  static async getHomeLeaderBoard(_req: Request, res: Response) {
    const leaderBoard = await LeaderBoardService.CreateLeaderBoard('home');
    return res.status(200).json(leaderBoard);
  }

  static async getAwayLeaderBoard(_req: Request, res: Response) {
    const leaderBoard = await LeaderBoardService.CreateLeaderBoard('away');
    return res.status(200).json(leaderBoard);
  }

  static async getLeaderBoard(_req: Request, res: Response) {
    const leaderBoard = await LeaderBoardService.CreateLeaderBoard('');
    return res.status(200).json(leaderBoard);
  }
}
