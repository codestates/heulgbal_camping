'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      notice: {
        type: Sequelize.TEXT,
      },
      minimum_people: {
        type: Sequelize.INTEGER,
      },
      maximum_people: {
        type: Sequelize.INTEGER,
      },
      reservation_date: {
        type: Sequelize.DATEONLY,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      reservation_state: {
        type: Sequelize.BOOLEAN,
      },
      campsite_id: {
        type: Sequelize.INTEGER,
      },
      people_extracharge: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  },
};
