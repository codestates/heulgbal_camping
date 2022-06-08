module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        customer_id: 'kimcoding',
        password: '12341234',
        email: '1@naver.com',
        name: '김회원',
        phone: '01087654321',
        type: '0',
        email_authorization: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        business_number: '1231212345',
        password: '12341234',
        email: '2@naver.com',
        name: '김사업자',
        business_name: 'with캠핑장',
        phone: '01012345678',
        business_address: '서울특별시 영등포구 의사당대로 1 (여의도동) 07233',
        type: 1,
        email_authorization: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        business_number: '1229312191',
        password: '12341234',
        email: '3@naver.com',
        name: '이사업자',
        business_name: '흙발 캠핑장',
        phone: '01087654321',
        business_address: '서울특별시 영등포구 여의공원로 13 (여의도동) 07235',
        type: 1,
        email_authorization: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkdelete('users', null, {});
  },
};
