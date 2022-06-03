'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        customer_id: 'dahee',
        password: '12341234',
        email: 'dahee@naver.com',
        name: '다희',
        phone: 1100000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkdelete('users', null, {});
  },
};
