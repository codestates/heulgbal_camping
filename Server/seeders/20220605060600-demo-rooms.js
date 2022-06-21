'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rooms', [
      {
        title: '투베드',
        content: '감성글램핑 신형텐트/BBQ포함/개별화장실',
        notice: '* 기준 인원 초과 시 추가요금발생합니다.',
        minimum_people: 2,
        maximum_people: 4,
        reservation_date_startday: 20220624,
        reservation_date_endday: 20220625,
        price: 125500,
        reservation_state: 1,
        people_extracharge: 20000,
        campsite_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '별이네1',
        content: '감성글램핑 신형텐트/BBQ포함/개별화장실',
        notice: 'ㅁ 애견과 함께 자연을 즐길 수 있는 민박',
        minimum_people: 2,
        maximum_people: 4,
        reservation_date_startday: 20220625,
        reservation_date_endday: 20220627,
        price: 90000,
        reservation_state: 1,
        people_extracharge: 20000,
        campsite_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkdelete('rooms', null, {});
  },
};
