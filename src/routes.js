import { Router } from 'express';

import UserController from './app/constrollers/UserController';
import SessionController from './app/constrollers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Started' });
});

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

// Routes bellow this middleware will pass only if the user is logged in
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
