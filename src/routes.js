import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AdminController from './app/controllers/AdminController';
import DirectorController from './app/controllers/DirectorController';
import GenreController from './app/controllers/GenreController';
import FilmController from './app/controllers/FilmController';
import LikeController from './app/controllers/LikeController';

import ValidatorUserStore from './app/validators/UserStore';
import ValidatorUpdateStore from './app/validators/UserUpdate';
import ValidatorSessionStore from './app/validators/SessionStore';
import ValidatorDirectorStore from './app/validators/DirectorStore';
import ValidatorGenreStore from './app/validators/GenreStore';
import FilmStore from './app/validators/FilmStore';
import LikeStore from './app/validators/LikeStore';

import swaggerConfig from './docs';

import authMiddleware from './app/middlewares/auth';
import nocacheMiddleware from './app/middlewares/no-cache';

const routes = new Router();

//Docs Api
routes.use('/api-docs', nocacheMiddleware, serve, setup(swaggerConfig));
//Admin and Session
routes.post('/admin', ValidatorUserStore, AdminController.store);
routes.post('/sessions', ValidatorSessionStore, SessionController.store);
routes.use(authMiddleware);
//User
routes.post('/users', ValidatorUserStore, UserController.store);
routes.put('/users', ValidatorUpdateStore, UserController.update);
routes.put('/users/cancel', ValidatorUpdateStore, UserController.cancel);
//Director
routes.get('/directors', DirectorController.index);
routes.post('/directors', ValidatorDirectorStore, DirectorController.store);
//Genre
routes.get('/genres', GenreController.index);
routes.post('/genres', ValidatorGenreStore, GenreController.store);
//Film
routes.get('/films', FilmController.index);
routes.get('/films/:id', FilmController.show);
routes.post('/films', FilmStore, FilmController.store);
//Film
routes.post('/likes', LikeStore, LikeController.store);

export default routes;
