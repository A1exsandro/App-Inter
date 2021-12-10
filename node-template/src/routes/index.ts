import { Router } from 'express';
import UseRouter from './user.routes';

const routes = Router();

routes.use('/user', UseRouter)

export default routes;
