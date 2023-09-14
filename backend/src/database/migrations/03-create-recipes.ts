import { Model, QueryInterface, DataTypes } from 'sequelize';
import IRecipe from '../../interfaces/IRecipe';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IRecipe>>('recipes', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      instructions: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('recipes');
  },
};