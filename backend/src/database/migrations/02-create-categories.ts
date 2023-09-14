import { Model, QueryInterface, DataTypes } from 'sequelize';
import ICategory from '../../interfaces/ICategory';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICategory>>('categories', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('categories');
  },
};