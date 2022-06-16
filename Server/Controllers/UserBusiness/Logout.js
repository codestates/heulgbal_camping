// 완료 
const { deleteAccessToken, deleteRefreshToken, isAuthorized } = require('../TokenFunction');

module.exports = (req, res) => {
  const tokenData = isAuthorized(req);
  // 쿠키에 jwt가 없거나 잘못된 토큰을 전달받은 경우
  if (!tokenData) {
    res.sendStatus(401);
  }

  // 로그아웃 요청시 refresh token 삭제
  //deleteRefreshToken(res);
  deleteAccessToken(res);
  return res.status(201).send('successfully loged-out');
};