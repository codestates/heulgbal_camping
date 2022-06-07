// model에서 예약 리스트 내역 가져와서 띄우기
const reservation = require('../../models/reservations'); // 응답을 실행하는 함수
const { isAuthorized } = require('../TokenFunction');

module.exports = {
  get: async (req, res) => {
    const userInfo = isAuthorized(req);
    const result = await reservation.findAll({
      where:{
        business_number: userInfo.business_number,
      },
    });
    res.status(200).json(result);
  },
  approval: async (req, res) => {
    // 아무 버튼도 누르지 않은 상태 -> 대기중(기본 상태)
    // 예약 거절 누르면 -> 거절 
    // 예약 승인 누르면 -> 승인
    const userInfo = isAuthorized(req);
    const [campsite, status] = await reservation.findOne({
      where: {
        id: reservation.id,
      }
    })
    .update
  }
}