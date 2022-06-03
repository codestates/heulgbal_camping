'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.option.belongsTo(models.reservation, {
        foreignKey: 'reservation_id',
        targetKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  option.init(
    {
      title: DataTypes.STRING(40),
      content: DataTypes.STRING,
      price: DataTypes.INTEGER,
      reservation_id: DataTypes.INTEGER,
      extra_charge: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'option',
    },
  );
  return option;
};
