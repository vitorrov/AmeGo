import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import DistributorController from './app/controllers/DistributorController';
import OrderController from './app/controllers/OrderController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveredController from './app/controllers/DeliveredController';
import DistributorSessionController from './app/controllers/DistributorSessionController';

import authMiddleware from './app/middlewares/auth';
import isAdmin from './app/middlewares/isAdmin';
import isDistributor from './app/middlewares/isDistributor';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/register', UserController.store); // Cadastro usuário

routes.post('/sessions', SessionController.store); // Login usuário

routes.post('/distributor', DistributorController.store); // Cadastro motoboy

routes.post('/distsession', DistributorSessionController.store); // Login Motoboy

routes.use(authMiddleware); // Rotas após essa linha apenas para usuários logados

routes.put('/users', UserController.update); // Atualizar usuario

routes.post('/order', OrderController.store); // Cadastrar nova entrega

routes.post('/files', upload.single('file'), FileController.store); // Upload de imagem

routes.put('/delivery/:orderid', DeliveryController.update); // Motoboy começar entrega

routes.get('/mydeliveries', isDistributor, DeliveryController.index); // Histórico de entregas do motoboy

//

routes.put(
  '/finishdelivery/:orderid',
  upload.single('file'),
  DeliveredController.update
);

routes.put('/distributors/:id', isAdmin, DistributorController.update); // Atualizar entregador
routes.delete('/distributors/:id', isAdmin, DistributorController.delete); // Remover entregador

routes.put('/teste/:orderid', isDistributor);

export default routes;
