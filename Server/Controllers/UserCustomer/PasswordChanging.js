const { Users } = require('../../models');
const { isAuthorized } = require('../TokenFunction');

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.status(401).send('password is not authorized');
  };
  const { password } = req.body;

  await Users.update({
    password
  },
  {
    where: {
      customer_id: userInfo.customer_id,
    },
  }
  ).then(() => {
    res.status(201);
  });
};