'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campsite extends Model {
    static associate(models) {
      models.campsite.belongsTo(models.user, {
        foreignKey: 'business_id',
        targetKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      models.campsite.hasMany(models.room, {
        foreignKey: 'campsite_id',
        sourceKey: 'id',
      });
      models.campsite.hasMany(models.campsite_images, {
        foreignKey: 'campsite_id',
        sourceKey: 'id',
      });
    }
  }
  campsite.init(
    {
      title: DataTypes.STRING(40),
      content: DataTypes.STRING(150),
      address: DataTypes.STRING(50),
      business_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'campsite',
    },
  );
  return campsite;
};
