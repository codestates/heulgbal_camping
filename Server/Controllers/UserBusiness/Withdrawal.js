const { user } = require('../../models');
const { isAuthorized } = require('../TokenFunction');

module.exports = async (req, res) => {
  const { id } = req.params;
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.sendStatus(404);
  };
  await user.destroy({
    where: { id }
  })
  .then (() => {
    res.status(201).send('계정이 정상적으로 삭제되었습니다');
  });
};