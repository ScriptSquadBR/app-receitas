import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Category extends Model<InferAttributes<Category>,
InferCreationAttributes<Category>> {
  declare id: CreationOptional<number>;
  declare category: string;
}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'categories',
  timestamps: false,
  underscored: true,
});
