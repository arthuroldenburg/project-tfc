import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';
import TeamService from '../service/team.service';

const LoginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  if (homeTeamId === awayTeamId) {
    return res.status(statusCodes.unprocessableEntity).json({
      message: 'It is not possible to create a match with two equal teams' });
  }
  const homeTeam = await TeamService.getOne(homeTeamId);
  const awayTeam = await TeamService.getOne(awayTeamId);
  if (!homeTeam || !awayTeam) {
    return res.status(statusCodes.notFound).json({
      message: 'There is no team with such id!',
    });
  }
  next();
};

export default LoginMiddleware;
