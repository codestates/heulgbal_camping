'use strict';
const { Model, INTEGER } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    static associate(models) {
      models.room.belongsTo(models.campsite, {
        foreignKey: 'campsite_id',
        targetKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      models.room.hasMany(models.room_images, {
        foreignKey: 'room_id',
        sourceKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      models.room.hasOne(models.reservation, {
        foreignKey: 'room_id',
        sourceKey: 'id',
      });
      models.room.hasMany(models.option, {
        foreignKey: 'room_id',
        sourceKey: 'id',
      });
    }
  }
  room.init(
    {
      title: DataTypes.STRING(40),
      content: DataTypes.TEXT,
      notice: DataTypes.TEXT,
      minimum_people: DataTypes.INTEGER,
      maximum_people: DataTypes.INTEGER,
      reservation_date_startday: DataTypes.DATEONLY,
      reservation_date_endday: DataTypes.DATEONLY,
      price: DataTypes.INTEGER,
      reservation_state: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      campsite_id: DataTypes.INTEGER,
      people_extracharge: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'room',
    },
  );
  return room;
};
