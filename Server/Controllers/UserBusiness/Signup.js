const { user } = require('../../models/users');
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
  const [ userInfo, created ] = await user.findOrCreate({
    where: { business_number, email },
    defaults: { business_number, password, email, name, phone }
  });
  // 새로 들어온 데이터라면 created = true
  // 데이터베이스에 존재하는 정보라면 회원가입 거절(id 기준)
  if (!created) return res.status(409).send('already exists');
  // 데이터베이스에 존재하지 않는 정보라면 회원가입 요청 성공
  // 비밀번호는 제외시키고 토큰에 정보 담아두기
  delete userInfo.password;
  const accessToken = generateAccessToken(userInfo.dataValues);
  return res.status(201).cookie('jwt', accessToken).json({message: 'ok'});
};
