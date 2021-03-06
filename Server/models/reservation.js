'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    static associate(models) {
      models.reservation.belongsTo(models.user, {
        foreignKey: 'customer_id',
        targetKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      models.reservation.belongsTo(models.room, {
        foreignKey: 'room_id',
        targetKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  reservation.init(
    {
      room_id: DataTypes.INTEGER,
      option_quantity: DataTypes.INTEGER,
      people_count: DataTypes.INTEGER,
      customer_id: DataTypes.INTEGER,
      business_number: DataTypes.STRING,
      room_approval_state: {
        type: DataTypes.STRING(8),
        defaultValue: '대기중',
      },
    },
    {
      sequelize,
      modelName: 'reservation',
    },
  );
  return reservation;
};
