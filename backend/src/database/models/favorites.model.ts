import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Favorite extends Model<InferAttributes<Favorite>,
InferCreationAttributes<Favorite>> {
  declare id: CreationOptional<number>;
  declare recipeId: number;
  declare userId: number;
}

Favorite.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  recipeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'favorites',
  timestamps: false,
  underscored: true,
});
