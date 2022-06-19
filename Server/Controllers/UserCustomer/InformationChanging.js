const { user } = require('../../models');
const { isAuthorized,
        generateAccessToken,
        sendAccessToken } = require('../TokenFunction');

module.exports = {
  get: async (req,res) => {
    const userInfo = isAuthorized(req);
    if (!userInfo) {
      res.status(401).send('someting is not authorized');
    };

    const result = await user.findOne({
      where:{
        customer_id: userInfo.customer_id
      }
    });
    res.status(200).json(result)
  },
  change: async (req, res) => {
    const { name, phone, email } = req.body;
    const userInfo = isAuthorized(req);
    if (!userInfo) {
      res.status(401).send('someting is not authorized');
    };
    const info = await user.findOne({
      where: {
        customer_id: userInfo.customer_id
      }
    });

    if (name === null) {
      info.name = info.name;
    }

    if (phone === null) {
      info.phone = info.phone;
    }

    if (email === null) {
      info.email = info.email;
    }

    if (name) {
      info.name = name;

    };

    if (phone) {
      info.phone = phone;

    };

    if (email) {
      info.email = email;

    };

    await info.save();

    const payload = {
      id: info.id,
      customer_id : info.customer_id,
      email : info.email,
      name : info.name,
      phone : info.phone,
    };

    const accessToken = generateAccessToken(payload);
    sendAccessToken(res, accessToken);

    return res.status(201).send({
      data: {
        accessToken: accessToken,
        id: info.id,
        customer_id : info.customer_id,
        business_number : info.business_number,
        email : info.email,
        name : info.name,
        business_name: info.business_name,
        business_address: info.business_address,
        phone : info.phone,
        type: info.type,
        email_authorization: info.email_authorization,
        createdAt: info.createdAt,
        updatedAt: info.updatedAt
      }
    })
  }
};