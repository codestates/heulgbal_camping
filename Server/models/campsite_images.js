'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campsite_images extends Model {
    static associate(models) {
      models.campsite_images.belongsTo(models.campsite, {
        foreignKey: 'campsite_id',
        targetKey: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  campsite_images.init(
    {
      image_url: DataTypes.TEXT,
      campsite_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'campsite_images',
    },
  );
  return campsite_images;
};
