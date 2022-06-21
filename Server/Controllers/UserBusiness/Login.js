require('dotenv').config();
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require('../TokenFunction');

const { user } = require('../../models');

module.exports = async (req, res) => {
  const { business_number, password } = req.body;
  
  const userInfo = await user.findOne({where: {business_number, password}});

  if (!userInfo) return res.status(401).send('id or password is not authorized')

  else {
    const data = {
    business_number: userInfo.dataValues.business_number,

    name: userInfo.dataValues.name,
    email: userInfo.dataValues.email,
    phone: userInfo.dataValues.phone,
    business_name: userInfo.dataValues.business_name,

    email_authrization: userInfo.dataValues.email_authrization,

    };

    const accessToken = generateAccessToken(data);


    sendAccessToken(res, accessToken, data);

  };

};