import { Model, QueryInterface, DataTypes } from 'sequelize';
import IEmployee from '../../interfaces/ICollaborator';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IEmployee>>('collaborators', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'author_id',
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
    return queryInterface.dropTable('collaborators');
  },
};