'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
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
    },
    {
      sequelize,
      modelName: 'option',
    },
  );
  return option;
};
