import { Model, QueryInterface, DataTypes } from 'sequelize';
import IMeasure from '../../interfaces/IMeasure';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMeasure>>('measures', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      measurement: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('measures');
  },
};