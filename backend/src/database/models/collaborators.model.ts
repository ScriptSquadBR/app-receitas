import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Collaborator extends Model<InferAttributes<Collaborator>,
InferCreationAttributes<Collaborator>> {
  declare id: CreationOptional<number>;
  declare authorId: number;
  declare recipeId: number;
}

Collaborator.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  recipeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'collaborators',
  timestamps: false,
  underscored: true,
});
