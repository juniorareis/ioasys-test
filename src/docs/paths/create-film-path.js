export default {
  post: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['Film'],
    summary: 'API para criar filmes',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              description: {
                type: 'string',
              },
              launch: {
                type: 'string',
              },
              age: {
                type: 'integer',
              },
              diretor_id: {
                type: 'integer',
              },
              genero_id: {
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
                id: {
                  type: 'integer',
                },
                name: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                launch: {
                  type: 'string',
                },
                age: {
                  type: 'string',
                },
                diretor_id: {
                  type: 'string',
                },
                genero_id: {
                  type: 'string',
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
