import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Gabriel Fagundes',
    email: 'aluzgabriel@hotmail.com',
    password_hash: '1231231231'
  });

  return res.json(user);
});

export default routes;
