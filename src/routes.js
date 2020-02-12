import { Router } from 'express';

import UserController from './app/constrollers/UserController';
import SessionController from './app/constrollers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/', (req, res) => {
  res.json({ message: 'Started' });
});

export default routes;
