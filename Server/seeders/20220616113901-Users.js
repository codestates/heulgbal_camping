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
    await queryInterface.bulkInsert('Users', [
      {
        id: 4,
        customer_id: "cidar",
        business_number: null,
        password: "password123",
        email: "cidar@gmail.com",
        name: "사이다",
        Business_name: null,
        business_address: null,
        phone: "1011223344",
        type: 0,
        email_authorization: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 5,
        customer_id: "sprite",
        business_number: null,
        password: "123456789",
        email: "sprite@gmail.com",
        name: "스프라이트",
        Business_name: null,
        business_address: null,
        phone: "1012345678",
        type: 0,
        email_authorization: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 6,
        customer_id: null,
        business_number: "12345678",
        password: "passwordnumber123",
        email: "grape@gmail.com",
        name: "김포도",
        Business_name: "포도 캠핑",
        business_address: "서울시 강서구",
        phone: "1011112222",
        type: 1,
        email_authorization: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 7,
        customer_id: null,
        business_number: "87654321",
        password: "123456789",
        email: "apple@gmail.com",
        name: "김사과",
        Business_name: "apple dog",
        business_address: "부산광역시 서구",
        phone: "1012347777",
        type: 1,
        email_authorization: null,
        createdAt: new Date,
        updatedAt: new Date
      },
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
