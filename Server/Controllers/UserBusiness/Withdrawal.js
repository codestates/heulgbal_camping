const { Users } = require('../../models/users');
const { isAuthorized } = require('../TokenFunction');

module.exports = async (req, res) => {
  const { id } = req.params;
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.sendStatus(404);
  };
  // 해당 유저의 계정 삭제
  await Users.destroy({
    where: { id }
  })
  .then (() => {
    res.sendStatus(201).send('계정이 정상적으로 삭제되었습니다');
  });
};