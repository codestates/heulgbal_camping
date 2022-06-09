const { user } = require('../../models/users');
const { isAuthorized } = require('../TokenFunction');

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.status(401).send('someting is not authorized');
  };
  const { name, phone, email } = req.body;

  await user.update({
    name, 
    phone,
    email
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