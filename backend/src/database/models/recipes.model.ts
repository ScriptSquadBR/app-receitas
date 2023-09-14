import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Recipe extends Model<InferAttributes<Recipe>,
InferCreationAttributes<Recipe>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare instructions: string;
  declare categoryId: number;
}

Recipe.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
  },
}, {
  sequelize: db,
  modelName: 'recipes',
  timestamps: false,
  underscored: true,
});
