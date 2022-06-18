const { user } = require('../../models');
const { generateAccessToken } = require('../TokenFunction');

module.exports = async (req, res) => {
  // customer user 회원가입
  const { business_number, password, email, name, business_name,business_address,phone } = req.body;
  // 입력받은 정보가 하나라도 부족하면 401 응답
  if (!business_number || !password || !email || !name || !phone || !business_address || !business_name){
    return res.status(401).send('not authorized');
  };
  // userInfo에 정보가 들어감.
  // 이미 정보가 존재한다면 created = false,
  // 새로 들어온 정보라면 created = true
  // id 값과 이메일이 중복되면, 회원가입 거절
  // const [ userInfo, created ] = await user.findOrCreate({
  //   where: { business_number, email },
  //   defaults: { business_number, password, email, name, phone,
  //    customer_id: null, }
  // });
  // // 새로 들어온 데이터라면 created = true
  // // 데이터베이스에 존재하는 정보라면 회원가입 거절(id 기준)
  // if (!created) return res.status(409).send('already exists');
  // // 데이터베이스에 존재하지 않는 정보라면 회원가입 요청 성공
  // // 비밀번호는 제외시키고 토큰에 정보 담아두기
  // delete userInfo.password;
  // const accessToken = generateAccessToken(userInfo.dataValues);
  // return res.status(201).cookie('jwt', accessToken).json({message: 'ok'});  const userInfo = await user.findOne({
  const userInfo = await user.findOne({  
    where: {
        business_number
      },
    });
    if (userInfo) {
      res.status(409).send('already exists')
    } else {
      //res.status(200).send('created!')
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
      // .then(() => {
      //   delete userInfo.password;
      //   const accessToken = generateAccessToken(userInfo.dataValues);
      //   return res.status(201).cookie('jwt', accessToken).json({message: 'ok'});
      // })
    }
};

// {
//   "business_number":"42608080808",
//   "password":"123456",
//   "email":"campingdog@gmail.com",
//   "name":"김코딩",
//   "business_name":"campingdog",
//   "business_address":"경기도 수원시",
//   "phone":"10789456123"
// }
