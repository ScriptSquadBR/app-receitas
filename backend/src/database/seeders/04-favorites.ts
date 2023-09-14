import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'favorites',
      [
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('favorites', {});
  },
};