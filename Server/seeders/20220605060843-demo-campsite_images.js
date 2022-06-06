'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('campsite_images', [
      {
        image_url:
          '129213987132983171289312931273983179129213987132983171289312931273983179129213987132983171289312931273983179129213987132983171289312931273983179',
        campsite_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image_url:
          '1987381938391918923798723953742098247192847298472590739512021234127498240124987414970749470411433124112414415136809681084908908095890358094584',
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
