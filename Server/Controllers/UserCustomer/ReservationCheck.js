// model에 만들어진 파일 이용해서 예약 내역 가져오기
const reservation = require('../../models'); 
const sequelize = require('../../models');
const { isAuthorized } = require('../TokenFunction');
const { QueryTypes } = require("sequelize");

module.exports = {
  // 예약 내역 출력
  get: async (req, res) => {
    // 유저 정보
    const userInfo = isAuthorized(req);
    // 해당 유저가 갖고 있는 예약 내역
    // reservation 데이터베이스에서 customer_id 연결 다시 시키기
    const result = await reservation.findAll({
      where:{
        customer_id: userInfo.customer_id,
      },
    });
    res.status(200).json(result);
  },
  cancel: async (req, res) => {
    const userInfo = isAuthorized(req);
    // 예약을 취소 할 경우, 데이터 삭제
    await reservation.destroy({
      where: {
        customer_id: userInfo.customer_id
      }
    });
  }
};