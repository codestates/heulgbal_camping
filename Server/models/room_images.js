'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room_images extends Model {
    static associate(models) {
      models.room_images.belongsTo(models.room, {
        foreignKey: 'room_id',
        targetKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  room_images.init(
    {
      image_url: DataTypes.TEXT,
      room_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'room_images',
    },
  );
  return room_images;
};
