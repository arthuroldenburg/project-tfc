import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import MatchesService from '../service/matches.service';

export default class Matches {
  static async matches(req: Request, res: Response) {
    const matches = await MatchesService.getAll();
    const { inProgress } = req.query;
    if (inProgress === 'true' || inProgress === 'false') {
      const progressStr = inProgress.toString();
      const filteredMatches = matches.filter((e) => e.inProgress.toString() === progressStr);
      return res.status(statusCodes.ok).json(filteredMatches);
    }
    res.status(statusCodes.ok).json(matches);
  }

  static matchesUpdate(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    console.log(homeTeamGoals, awayTeamGoals);
    res.status(statusCodes.ok).json({ id });
  }

  static async finishMatches(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.finishMatch(Number(id));
    res.status(statusCodes.ok).json({ message: 'Finished' });
  }
}
