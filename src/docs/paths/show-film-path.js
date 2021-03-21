export default {
  get: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['Film'],
    summary: 'API para mostrar um filme',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'integer',
        },
      },
    ],
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
                diretor: {
                  type: 'object',
                },
                genero: {
                  type: 'object',
                },
                likes: {
                  type: 'object',
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
