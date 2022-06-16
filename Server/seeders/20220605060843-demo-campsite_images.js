'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('campsite_images', [
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/campsite/15855351678635122_M.jpeg',
        campsite_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/campsite/15855351836491494_M.jpeg',
        campsite_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/campsite/15855352113288693_M.jpeg',
        campsite_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/campsite/216089659302546842_M.jpeg',
        campsite_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/campsite/216089659305641704_M.jpeg',
        campsite_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          'https://heulgbalimage.s3.ap-northeast-2.amazonaws.com/campsite/216089659315257279_M.jpeg',
        campsite_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkdelete('campsite_images', null, {});
  },
};
