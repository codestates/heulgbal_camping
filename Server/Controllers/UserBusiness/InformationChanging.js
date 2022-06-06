const { user } = requrie("../../models");
const { isAuthorized } = require("../TokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.status(401).send("someting is not authorized");
  };
  const { name, phone, email, business_address, business_name } = req.body;

  await user.update({
    name, 
    phone,
    email,
    business_address,
    business_name
  },
  {
    where: {
      business_number: userInfo.business_number,
    },
  }
  ).then(() => {
    res.status(201);
  });
};