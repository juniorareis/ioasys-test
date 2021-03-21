export default {
  get: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['Director'],
    summary: 'API para listar diretor de filmes',
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
