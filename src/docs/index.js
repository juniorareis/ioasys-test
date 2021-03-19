import loginPath from './paths/login-path';
import createUserAdminPath from './paths/create-user-admin-path';
import badRequest from './components/bad-request';
import serverError from './components/server-error';
import unauthorized from './components/unauthorized';
import forbidden from './components/forbidden';
//Schema
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
  ],
  paths: {
    '/sessions': loginPath,
    '/admin': createUserAdminPath,
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    accountData: accountDataSchema,
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema,
    },
    badRequest,
    serverError,
    unauthorized,
    forbidden,
  },
};
