require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '1h'});
  },
  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn : '2d'})
  },
  sendAccessToken: (res, accessToken) => {
    return res.status(200).cookie('jwt', accessToken).json({ data: { accessToken }, message: 'ok' });  
  },
  sendRefreshToken: (res, refreshToken) => {
    return res.cookie('refreshToken', refreshToken);
  },
  deleteAccessToken: (res) =>{
    res.clearCookie('accessToken');
  },
  deleteRefreshToken: (res) => {
    res.clearCookie('refreshToken');
  },
  isAuthorized: (req) => {
    const authorization = req.cookies.jwt;
    if(!authorization) {
      return null;
    }
    // const token = authorization.split(' ')[1];
    const token = authorization
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch(error) { return null; }
  }
};
