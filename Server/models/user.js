'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      models.user.hasMany(models.reservation, {
        foreignKey: 'customer_id',
        sourceKey: 'id',
      });
      models.user.hasOne(models.campsite, {
        foreignKey: 'business_id',
        sourceKey: 'id',
      });
    }
  }
  user.init(
    {
      customer_id: DataTypes.STRING(20),
      business_number: DataTypes.INTEGER,
      password: DataTypes.STRING(20),
      email: DataTypes.STRING(50),
      name: DataTypes.STRING(5),
      business_name: DataTypes.STRING(20),
      business_address: DataTypes.STRING(50),
      phone: DataTypes.INTEGER,
      type: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      email_authorization: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'user',
    },
  );
  return user;
};
