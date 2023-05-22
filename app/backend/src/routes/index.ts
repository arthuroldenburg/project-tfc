import { Router } from 'express';
import LoginController from '../controller/login.controller';
import TeamController from '../controller/team.controller';
import MatchesController from '../controller/matches.controller';
import LeaderBoardController from '../controller/leaderboard.controller';
import validateToken from '../token/validate.token';
import loginMiddleware from '../Middlewares/Login.middleware';
import TeamsVerify from '../Middlewares/TeamsVerify.middleware';

const router = Router();

router
  .route('/teams')
  .get(TeamController.getAll);

router
  .route('/teams/:id')
  .get(TeamController.getOne);

router
  .route('/login')
  .post(loginMiddleware, LoginController.login);

router
  .route('/login/role')
  .get(validateToken, LoginController.loginRole);

router
  .route('/matches')
  .get(MatchesController.matches)
  .post(validateToken, TeamsVerify, MatchesController.createMatches);

router
  .route('/matches/:id/finish')
  .patch(validateToken, MatchesController.finishMatches);

router
  .route('/matches/:id')
  .patch(validateToken, MatchesController.matchesUpdate);

router
  .route('/leaderboard/home')
  .get(LeaderBoardController.getHomeLeaderBoard);

router
  .route('/leaderboard/away')
  .get(LeaderBoardController.getAwayLeaderBoard);

router
  .route('/leaderboard')
  .get(LeaderBoardController.getLeaderBoard);
// para uso de middleware é só colocar ele antes do controller

export default router;
