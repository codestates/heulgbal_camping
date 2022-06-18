// 완료
const { user } = require('../../models');
const { isAuthorized } = require('../TokenFunction');

module.exports = async (req, res) => {
  const { password } = req.body;
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.status(401).send('password is not authorized');
  };

  const info = await user.findOne({
    where:{
      business_number: userInfo.business_number
    }
  });

  if (password) {
    info.password = password;
    res.status(201).send('password is changed')
  } else {
    info.password = info.password;
  }

  await info.save();
};