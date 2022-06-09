const { user } = require('../../models/users');
const { isAuthorized } = require('../TokenFunction');

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.sendStatus(404);
  };
  // 해당 유저의 계정 삭제
  await user.destroy({
    where: { cusomer_id: userInfo.cusomer_id }
  })
  .then (() => {
    res.sendStatus(201);
  });
};