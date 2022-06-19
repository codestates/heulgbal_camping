const { reservation } = require('../../models');
const sequelize = require('sequelize');
const { isAuthorized } = require('../TokenFunction');
const { QueryTypes } = require('sequelize');


module.exports = {

  get: async (req, res) => {

    const userInfo = isAuthorized(req);

    if (!userInfo) {
      res.status(401).send('로그인을 해주세요');
    }

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

  approval: async (req, res) => {

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
