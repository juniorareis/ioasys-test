export default {
  description: 'Problema no servidor',
  content: {
    'aplication/json': {
      schema: {
        $ref: '#/schemas/error',
      },
    },
  },
};
