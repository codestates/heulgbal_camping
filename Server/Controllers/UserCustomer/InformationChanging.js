// 완료 but, CLI 에서 오류 나옴. 정보 변경은 됨
const { user } = require('../../models');
const { isAuthorized,
        generateAccessToken,
        sendAccessToken } = require('../TokenFunction');

module.exports = async (req, res) => {
  //console.log(req.cookies)
  const { name, phone, email } = req.body;
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.status(401).send('someting is not authorized');
  };

  // await user.update({
  //   name, 
  //   phone,
  //   email
  // },
  // {
  //   where: {
  //     customer_id: userInfo.customer_id,
  //   },
  // }
  // ).then(() => {
  //   res.status(201);
  // });

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
    // info.phone = info.phone;
    // info.email = info.email;
  };

  if (phone) {
    info.phone = phone;
    // info.name = info.name;
    // info.email = info.email;
  };

  if (email) {
    info.email = email;
    // info.name = info.name;
    // info.phone = info.phone;
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
};