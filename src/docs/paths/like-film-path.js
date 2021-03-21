export default {
  post: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['Like'],
    summary: 'API para curtir filme',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              film_id: {
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
                success: {
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
