import { Router } from 'express';
import validateToken from '../token/validate.token';
import LoginController from '../controller/login.controller';
import TeamController from '../controller/team.controller';
import MatchesController from '../controller/matches.controller';
import loginMiddleware from '../Middlewares/Login.middleware';

const router = Router();

router
  .route('/teams')
  .get(TeamController.getAll);

router
  .route('/teams/:id')
  .get(TeamController.getOne);

router
  .route('/login')
  // .post(LoginController.login);
  .post(loginMiddleware, LoginController.login);

router
  .route('/login/role')
  .get(validateToken, LoginController.loginRole);

router
  .route('/matches')
  .get(MatchesController.matches)
  .post(validateToken, MatchesController.createMatches);

router
  .route('/matches/:id/finish')
  .patch(validateToken, MatchesController.finishMatches);

router
  .route('/matches/:id')
  .patch(validateToken, MatchesController.matchesUpdate);
// para uso de middleware é só colocar ele antes do controller

export default router;
