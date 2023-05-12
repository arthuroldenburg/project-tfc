import { Router } from 'express';
import TeamController from '../controller/team.controller';

const router = Router();

router
  .route('/teams')
  .get(TeamController.getAll);

// para uso de middleware é só colocar ele antes do controller

export default router;
