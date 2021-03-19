export default {
  put: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['User'],
    summary: 'API para cancelar usuário',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
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
                message: {
                  type: 'string',
                },
                data: {
                  type: 'object',
                  schema: {
                    type: 'object',
                    properties: {
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
