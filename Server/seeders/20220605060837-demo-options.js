'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('options', [
      {
        title: '숯불 4개',
        content: '해당 상품은 카운터에서 수령 가능',
        price: 10000,
        room_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '부탄가스 2개',
        content: '해당 상품은 카운터에서 수령 가능',
        price: 6000,
        room_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkdelete('options', null, {});
  },
};
