'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Reservations', [
      {
        id:2,
        room_id:1,
        people_count:4,
        customer_id:"cidar",
        business_number:"12345678",
        room_approval_state:null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id:3,
        room_id:2,
        people_count:2,
        customer_id:"sprite",
        business_number:"87654321",
        room_approval_state:null,
        createdAt: new Date,
        updatedAt: new Date
      }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
