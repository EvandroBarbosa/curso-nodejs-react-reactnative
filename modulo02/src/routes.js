// Desestrutura a função Router do modulo express
import { Router } from 'express';

// Carrega o modulo do multer, que é usado para upload de arquivo como multipart
import multer from 'multer';

// Carrega as configurações do multer
import multerConfig from './config/multer';

/* Carregas os controllers da aplicação */
import userController from './app/controllers/UserController';
import sessionController from './app/controllers/SessionController';
import fileController from './app/controllers/FileController';
import providerController from './app/controllers/ProviderController';
import AvailableController from './app/controllers/AvailableController';
import appointmentsController from './app/controllers/AppointmentsController';
import scheduleController from './app/controllers/ScheduleController';
import notificationController from './app/controllers/NotificationController';

// Carrega as configurações do jwt
import authMiddlewares from './app/middlewares/auth';

// Executa a função Router do express
const routes = new Router();

// Configura o multer para fazer o upload
const upload = multer(multerConfig);

/* Configura as rotas da aplicação */

// Rotas de Login
routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

// Middlewares de autorização
// A partir daqui so terá acesso que for usuário e se estiver autenticado
routes.use(authMiddlewares);
routes.put('/users', userController.update);

// Rotas do provedor de serviços
routes.get('/providers', providerController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

// Rota para upload do avatar do perfil do usuário
routes.post('/files', upload.single('file'), fileController.store);

// Rotas de agendamento de serviços, cancelamento e listagem
routes.get('/appointments', appointmentsController.index);
routes.post('/appointments', appointmentsController.store);
routes.delete('/appointments/:id', appointmentsController.delete);

// Rota de listagem da agenda do provedor de serviços
routes.get('/schedules', scheduleController.index);

// Rotas de notificação de agendamento
routes.get('/notifications', notificationController.index);
routes.put('/notifications/:id', notificationController.update);

export default routes;
