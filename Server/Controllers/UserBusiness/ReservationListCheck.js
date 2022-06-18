// model에서 예약 리스트 내역 가져와서 띄우기
const { reservation } = require('../../models'); // 응답을 실행하는 함수
const sequelize = require('sequelize');
const { isAuthorized } = require('../TokenFunction');
const { QueryTypes } = require('sequelize');


module.exports = {
  // 예약 내역 출력
  get: async (req, res) => {
    // 사업자 정보
    const userInfo = isAuthorized(req);

    if (!userInfo) {
      res.status(401).send('로그인을 해주세요');
    }
    // 해당 사업자가 갖고 있는 예약 내역 
    // reservatioins 데이터베이스에 'business_number' 추가하고
    // 해당 column에 'user' 데이터에 있는 'business_number' 추가
    const result = await reservation.findAll({
      where:{
        business_number: userInfo.business_number
      }
    });
    if (result === null) {
      res.status(201).send('no reservation exist');
    }
    res.status(201).json(result);
  },
  // 예약 승인
  // 아무 버튼도 누르지 않은 상태 -> 대기중(기본 상태) or  null
  approval: async (req, res) => {
    // 사업자 정보 -> 스키마 수정
    const { room_approval_state } = req.body;
    const userInfo = isAuthorized(req);

    if (!userInfo) {
      res.status(401).send('로그인을 해주세요');
    }

    const result = await reservation.update(
      {
        room_approval_state: room_approval_state 
      },
      {
        where:{
        business_number: userInfo.business_number
      }
    })
    res.status(201).json(result);
  },
  // 예약 거절 -> 스키마 수정
  disapproval: async (req, res) => {
    const userInfo = isAuthorized(req);

    const result = await reservation.update(
      {
        room_approval_state: "거절"
      },
      {
        where: {
          business_number: userInfo.business_number
        }
      })
      res.status(201).json(result);
  }
};
