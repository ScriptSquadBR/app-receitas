import { Model, QueryInterface, DataTypes } from 'sequelize';
import IIngredient from '../../interfaces/IIngredient';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IIngredient>>('ingredients', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      measureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'measure_id',
        references: {
          model: 'measures',
          key: 'id',
        },
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('ingredients');
  },
};