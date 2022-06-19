const reservation = require('../../models'); 
const sequelize = require('../../models');
const { isAuthorized } = require('../TokenFunction');
const { QueryTypes } = require("sequelize");

module.exports = {

  get: async (req, res) => {

    const userInfo = isAuthorized(req);

    const result = await reservation.findAll({
      where:{
        customer_id: userInfo.customer_id,
      },
    });
    res.status(200).json(result);
  },
  cancel: async (req, res) => {
    const userInfo = isAuthorized(req);

    await reservation.destroy({
      where: {
        customer_id: userInfo.customer_id
      }
    });
  }
};