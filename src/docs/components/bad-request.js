export default {
  description: 'Requisição inválida',
  content: {
    'aplication/json': {
      schema: {
        $ref: '#/schemas/error',
      },
    },
  },
};
