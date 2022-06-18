'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('room_images', [
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/room/16158547305094975_M.jpeg',
        room_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/room/16158547278188175_M.jpeg',
        room_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/room/16158547195745359_M.jpeg',
        room_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/room/216089728666160527_M.jpeg',
        room_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/room/216089728664129181_M.jpeg',
        room_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/room/216089728660511204_M.jpeg',
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
