import { Router } from 'express';
import userController from './app/controllers/UserController';
import sessionController from './app/controllers/SessionController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddlewares);
routes.put('/users', userController.update);

export default routes;
