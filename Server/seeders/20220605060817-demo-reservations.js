'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservations', [
      {
        room_id: 1,
        option_quantity: 2,
        people_count: 4,
        room_approval_state: 'waiting',
        customer_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_id: 2,
        option_quantity: 3,
        people_count: 3,
        room_approval_state: 'waiting',
        customer_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkdelete('reservations', null, {});
  },
};
