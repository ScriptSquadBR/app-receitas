import { Model, QueryInterface, DataTypes } from 'sequelize';
import IRecipeHasIngredient from '../../interfaces/IRecipeHasIngredient';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IRecipeHasIngredient>>('trybe_eval', {
      recipeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'recipe_id',
        references: {
          model: 'recipes',
          key: 'id',
        },
      },

      ingredientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'ingredient_id',
        references: {
          model: 'ingredients',
          key: 'id',
        },
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('trybe_eval');
  },
};