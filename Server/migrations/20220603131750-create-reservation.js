'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      room_id: {
        type: Sequelize.INTEGER,
      },
      option_quantity: {
        type: Sequelize.INTEGER,
      },
      people_count: {
        type: Sequelize.INTEGER,
      },
      customer_id: {
        type: Sequelize.INTEGER,
      },
      room_approval_state: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('reservations');
  },
};
