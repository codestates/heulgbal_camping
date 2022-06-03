'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.reservation.belongsTo(models.user, {
        foreignKey: 'customer_id',
        targetKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      models.reservation.hasMany(models.option, {
        foreignKey: 'reservation_id',
        sourceKey: 'id',
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
      room_approval_state: {
        type: DataTypes.STRING(8),
        defaultValue: 'waiting',
      },
    },
    {
      sequelize,
      modelName: 'reservation',
    },
  );
  return reservation;
};
