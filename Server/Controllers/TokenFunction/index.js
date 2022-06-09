require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '15s'});
  },
  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_TOKEN, { expiresIn : '2h'})
  },
  sendAccessToken: (res, accessToken) => {
    return res.cookie('jwt', accessToken).json({ data: { accessToken }, message: 'ok' });  
  },
  sendRefreshToken: (res, refreshToken) => {
    return res.cookie('refreshToken', refreshToken);
  },
  deleteRefreshToken: (res) => {
    res.clearCookie('refreshToken');
  },
  isAuthorized: (req) => {
    const authorization = req.cookies.jwt;
    if(!authorization) {
      return null;
    }
    const token = authorization.split(' ')[1];
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch(error) { return null; }
  }
};
