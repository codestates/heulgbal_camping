'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('campsites', [
      {
        title: '럭셔리 글램핑 W 풀빌라',
        content:
          '산청으로 떠나는 하룻밤의 감성여행 친절한 직원,깨끗한 시설,맛있는 음식,즐거운 액티비티',
        address: '경상남도 산청군 산청읍 웅석봉로285번길 80-20',
        business_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '가평 엘리스산장 캠핑&글램핑',
        content: '애견과 함께하는 자연 속 펜션 캠핑장, 엘리스산장^^',
        address: '경기도 가평군 설악면 어비산길 204 엘릭스산장',
        business_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkdelete('campsites', null, {});
  },
};
