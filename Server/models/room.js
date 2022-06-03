'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.room.belongsTo(models.room, {
        foreignKey: 'campsite_id',
        targetKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      models.room.hasMany(models.room_images, {
        foreignKey: 'room_id',
        sourceKey: 'id',
      });
      models.room.hasOne(models.reservation, {
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
      reservation_date: DataTypes.DATEONLY,
      price: DataTypes.INTEGER,
      reservation_state: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
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
