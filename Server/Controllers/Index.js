// url별 분기
module.exports = {
  // default 
  campsite: require('./Campsites/CampsiteList'),
  roomList: require('./Campsites/RoomList'),
  reservation: require('./Campsites/Reservation'),


  // related with user_customer
  login: require('./UserCustomer/Login'),
  logout: require('./UserCustomer/Logout'),
  signup: require('./UserCustomer/Signup'),
  infoChange: require('./UserCustomer/InformationChanging'),
  passwordChange: require('./UserCustomer/PasswordChanging'),
  // reservationCheck: require('./UserCustomer/ReservationCheck'),
  withdrawal: require('./UserCustomer/Withdrawal'),

  //related with user_business
  loginBusiness: require('./UserBusiness/Login'),
  logoutBusiness: require('./UserBusiness/Logout'),
  signupBusiness: require('./UserBusiness/Signup'),
  infoChangeBusiness: require('./UserBusiness/InformationChanging'),
  passwordChangeBusiness: require('./UserBusiness/PasswordChanging'),
  // reservationCheckBusiness: require('./UserBusiness/ReservationListCheck'),
  withdrawalBusiness: require('./UserBusiness/Withdrawal')

};
