export default {
  put: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['User'],
    summary: 'API para atualizar usuário',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              email: {
                type: 'string',
              },
              oldPassword: {
                type: 'string',
              },
              confirmPassword: {
                type: 'string',
              },
              password: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer',
                },
                name: {
                  type: 'string',
                },
                email: {
                  type: 'string',
                },
                admin: {
                  type: 'boolean',
                },
              },
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};
