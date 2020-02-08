import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import userController from './app/controllers/UserController';
import sessionController from './app/controllers/SessionController';
import fileController from './app/controllers/FileController';
import providerController from './app/controllers/ProviderController';
import appointmentsController from './app/controllers/AppointmentsController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddlewares);
routes.put('/users', userController.update);

routes.get('/providers', providerController.index);

routes.post('/files', upload.single('file'), fileController.store);

routes.get('/appointments', appointmentsController.index);
routes.post('/appointments', appointmentsController.store);

export default routes;
