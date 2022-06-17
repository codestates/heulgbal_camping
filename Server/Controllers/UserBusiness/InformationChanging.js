// CLI 창에서는 'ERR_HTTP_HEADERS_SENT' 오류 발생하지만
// 정보 변경은 정상적으로 이루어짐

const { Users } = require('../../models');
const { isAuthorized,
  generateAccessToken,
  sendAccessToken } = require('../TokenFunction');

module.exports = async (req, res) => {
  const { name, phone, email, 
          business_address, business_name } = req.body;

  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.status(401).send('something is not authorized');
  };
  // await user.update({
  //   name, 
  //   phone,
  //   email,
  //   business_address,
  //   business_name
  // },
  // {
  //   where: {
  //     business_number: userInfo.business_number,
  //   },
  // }
  // ).then(() => {
  //   res.status(201);
  // });
  const info = await Users.findOne({
    where: {
      business_number: userInfo.business_number
    }
  });

  if (name === null) {
    info.name = info.name;
  } else {
    info.name = name;
  }

  if (phone === null) {
    info.phone = info.phone;
  } else {
    info.phone = phone;
  }

  if (email === null) {
    info.email = info.email;
  } else {
    info.email = email;
  }

  if (business_address === null) {
    info.business_address = info.business_address;
  } else {
    info.business_address = business_address;
  }

  if (business_name === null) {
    info.business_name = info.business_name;
  } else {
    info.business_name = business_name;
  }

  await info.save();

  const payload = {
    id: info.id,
    business_number : info.business_number,
    email : info.email,
    name : info.name,
    phone : info.phone,
    business_address : info.business_address,
    business_name : info.business_name
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
};