const { user } = require('../../models');
const { generateAccessToken } = require('../TokenFunction');

module.exports = async (req, res) => {

  const { customer_id, password, email, name, phone } = req.body;

  if (!customer_id || !password || !email || !name || !phone){
    return res.status(401).send('not authorized');
  };

  const userInfo = await user.findOne({
    where: {
      customer_id, 
    },
  });
  if (userInfo) {
    res.status(409).send('already exists')
  } else {
    user.create({
      customer_id : customer_id, password: password, 
      email: email, name : name, phone : phone,
      business_number: null,
      business_address: null,
      type: 0,
      email_authorization: null,
    })
    .then(() => {
      return res.status(201).send('created!')
    })

  }
};
