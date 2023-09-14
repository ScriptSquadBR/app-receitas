import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
