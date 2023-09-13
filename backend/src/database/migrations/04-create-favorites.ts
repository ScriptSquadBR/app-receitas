import { Model, QueryInterface, DataTypes } from 'sequelize';
import IFavorite from '../../interfaces/IFavorite';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFavorite>>('favorites', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },

      recipeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'recipe_id',
        references: {
          model: 'recipes',
          key: 'id',
        },
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('favorites');
  },
};