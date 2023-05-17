import { Router } from 'express';
import validateToken from '../token/validate.token';
import LoginController from '../controller/login.controller';
import TeamController from '../controller/team.controller';
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
// para uso de middleware é só colocar ele antes do controller

export default router;
