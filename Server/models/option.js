'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
    static associate(models) {
      models.option.belongsTo(models.room, {
        foreignKey: 'room_id',
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
      room_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'option',
    },
  );
  return option;
};
