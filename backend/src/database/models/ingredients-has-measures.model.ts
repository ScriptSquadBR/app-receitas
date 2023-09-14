import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class IngredientHasMeasures extends Model<InferAttributes<IngredientHasMeasures>,
InferCreationAttributes<IngredientHasMeasures>> {
  declare recipeId: number;
  declare ingredientId: number;
}

IngredientHasMeasures.init({
  recipeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  ingredientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'ingredients_has_measures',
  timestamps: false,
  underscored: true,
});
