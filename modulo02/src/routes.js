import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import userController from './app/controllers/UserController';
import sessionController from './app/controllers/SessionController';
import fileController from './app/controllers/FileController';
import providerController from './app/controllers/ProviderController';
import AvailableController from './app/controllers/AvailableController';
import appointmentsController from './app/controllers/AppointmentsController';
import scheduleController from './app/controllers/ScheduleController';
import notificationController from './app/controllers/NotificationController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddlewares);
routes.put('/users', userController.update);

routes.get('/providers', providerController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.post('/files', upload.single('file'), fileController.store);

routes.get('/appointments', appointmentsController.index);
routes.post('/appointments', appointmentsController.store);
routes.delete('/appointments/:id', appointmentsController.delete);

routes.get('/schedules', scheduleController.index);

routes.get('/notifications', notificationController.index);
routes.put('/notifications/:id', notificationController.update);

export default routes;
