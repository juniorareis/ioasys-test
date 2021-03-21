//USER AND AUTH
import loginPath from './paths/login-path';
import createUserAdminPath from './paths/create-user-admin-path';
import createUserPath from './paths/create-user-path';
import userUpdatePath from './paths/user-update-path';
import userCancelPath from './paths/user-cancel-path';

//DIRECTOR
import createDirectorPath from './paths/create-director-path';
import listDirectorPath from './paths/list-director-path';

//GENRES
import createGenrePath from './paths/create-genre-path';
import listGenrePath from './paths/list-genre-path';

//FILM
import createFilmPath from './paths/create-film-path';
import listFilmPath from './paths/list-film-path';
import showFilmPath from './paths/show-film-path';

//LIKE
import likeFilmPath from './paths/like-film-path';

//COMPONENTS
import badRequest from './components/bad-request';
import serverError from './components/server-error';
import unauthorized from './components/unauthorized';
import forbidden from './components/forbidden';

//SCHEMA
import accountSchema from './schemas/account-schema';
import loginParamsSchema from './schemas/login-params-schema';
import errorSchema from './schemas/error-schema';
import apiKeyAuthSchema from './schemas/api-key-auth-schema';
import accountDataSchema from './schemas/account-data-schema';

export default {
  openapi: '3.0.0',
  info: {
    title: 'API ioasys filmes',
    description: 'API ioasys filmes',
    version: '1.0.0',
  },
  host: 'localhost:3355',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'User',
    },
    {
      name: 'Director',
    },
    {
      name: 'Genre',
    },
    {
      name: 'Film',
    },
    {
      name: 'Like',
    },
  ],
  paths: {
    '/sessions': loginPath,
    '/admin': createUserAdminPath,
    '/users/create': createUserPath,
    '/users/update': userUpdatePath,
    '/users/cancel': userCancelPath,
    '/directors/create': createDirectorPath,
    '/directors/list': listDirectorPath,
    '/genres/create': createGenrePath,
    '/genres/list': listGenrePath,
    '/films/create': createFilmPath,
    '/films/list': listFilmPath,
    '/films/show/{id}': showFilmPath,
    '/likes/create': likeFilmPath,
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    accountData: accountDataSchema,
  },
  components: {
    securitySchemes: {
      bearerAuth: apiKeyAuthSchema,
    },
    badRequest,
    serverError,
    unauthorized,
    forbidden,
  },
};
