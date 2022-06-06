// url별 분기
module.exports = {
  // default 
  campsite: require('./campsites'),
  roomList: require('./campsites/{id}/rooms'),
  reservation: require('./campsites/{id}/rooms/{id}/reservation'),


  // related with user_customer
  login: require('./user/login'),
  signup: require('./user/signup'),
  mypage: require('./user/{id}'),
  infoChange: require('./user/{id}/information'),
  passwordChange: require('./user/{id}/password'),
  reservationCheck: require('./user{id}/reservations'),
  withdrawal: require('./user/{id}/withdrawl'),

  //related with user_business
  loginBusiness: require('./business/login'),
  signupBusiness: require('./business/signup'),
  mypageBusiness: require('./business/{id}'),
  infoChangeBusiness: require('./business/{id}/information'),
  passwordChangeBusiness: require('./business/{id}/password'),
  reservationCheckBusiness: require('./business/{id}/reservations'),
  withdrawalBusiness: require('./business/{id}/withdrawal')

};
