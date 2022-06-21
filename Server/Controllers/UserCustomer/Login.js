// 완료

require('dotenv').config();
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require('../TokenFunction');

const { user } = require('../../models');

module.exports = async (req, res) => {
  const { customer_id, password } = req.body;
  
  const userInfo = await user.findOne({where: {customer_id, password}});

  if (!userInfo) return res.status(401).send('id or password is not authorized')
  else {
    const data = {
    customer_id: userInfo.dataValues.customer_id,
    name: userInfo.dataValues.name,
    email: userInfo.dataValues.email,
    phone: userInfo.dataValues.phone,
    email_authrization: userInfo.dataValues.email_authrization,
    };

    const accessToken = generateAccessToken(data);


    sendAccessToken(res, accessToken);

  };
};