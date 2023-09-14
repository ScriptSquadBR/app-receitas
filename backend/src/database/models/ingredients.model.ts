import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Ingredient extends Model<InferAttributes<Ingredient>,
InferCreationAttributes<Ingredient>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare measureId: number;
}

Ingredient.init({
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

  measureId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'ingredients',
  timestamps: false,
  underscored: true,
});
