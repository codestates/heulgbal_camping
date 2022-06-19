const { user } = require('../../models');
const { generateAccessToken } = require('../TokenFunction');

module.exports = async (req, res) => {

  const { business_number, password, email, name, business_name,business_address,phone } = req.body;

  if (!business_number || !password || !email || !name || !phone || !business_address || !business_name){
    return res.status(401).send('not authorized');
  };

  const userInfo = await user.findOne({  
    where: {
        business_number
      },
    });
    if (userInfo) {
      res.status(409).send('already exists')
    } else {

      user.create({
        customer_id : null, password: password, 
        email: email, name : name, phone : phone,
        business_number: business_number,
        business_address: business_address,
        type: 1,
        email_authorization: null,
      })
      .then(() => {
        return res.status(201).send('created!')
      })

    }
};