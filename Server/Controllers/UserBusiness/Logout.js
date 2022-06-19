const { deleteAccessToken, deleteRefreshToken, isAuthorized } = require('../TokenFunction');

module.exports = (req, res) => {
  const tokenData = isAuthorized(req);

  if (!tokenData) {
    res.sendStatus(401);
  }

  deleteAccessToken(res);
  return res.status(201).send('successfully loged-out');
};