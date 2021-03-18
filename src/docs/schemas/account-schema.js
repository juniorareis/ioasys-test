export default {
  type: 'object',
  properties: {
    user: {
      type: 'array',
      $ref: '#/schemas/accountData',
    },
    token: {
      type: 'string',
    },
  },
};
