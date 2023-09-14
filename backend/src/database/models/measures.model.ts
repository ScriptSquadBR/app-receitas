import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Measure extends Model<InferAttributes<Measure>,
InferCreationAttributes<Measure>> {
  declare id: CreationOptional<number>;
  declare quantity: string;
  declare measurement: string;
}

Measure.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  measurement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'measures',
  timestamps: false,
  underscored: true,
});
