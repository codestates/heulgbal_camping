'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('room_images', [
      {
        image_url:
          '123124871294128019313202112312487129412801931320211231248712941280193132021',
        room_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          '123124871294128019313202112312487129412801931320211231248712941280193132021',
        room_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkdelete('room_images', null, {});
  },
};
