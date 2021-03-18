import loginPath from './paths/login-path';
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
  servers: [
    {
      url: '/',
    },
  ],
  tags: [
    {
      name: 'User',
      name: 'Enquente',
    },
  ],
  paths: {
    '/sessions': loginPath,
    '/loadServer': loadServerPath,
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
