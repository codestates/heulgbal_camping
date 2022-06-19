module.exports = {

  campsite: require('../Controllers/Campsites/CampsiteList'),
  roomList: require('../Controllers/Campsites/RoomList'),
  reservation: require('../Controllers/Campsites/Reservation'),



  login: require('../Controllers/UserCustomer/Login'),
  logout: require('../Controllers/UserCustomer/Logout'),
  signup: require('../Controllers/UserCustomer/Signup'),
  infoGet: require('../Controllers/UserCustomer/InformationChanging').get,
  infoChange: require('../Controllers/UserCustomer/InformationChanging').change,
  passwordChange: require('../Controllers/UserCustomer/PasswordChanging'),
  reservationCheck: require('../Controllers/UserCustomer/ReservationCheck').get,
  reservationCancel: require('../Controllers/UserCustomer/ReservationCheck').cancel,
  withdrawal: require('../Controllers/UserCustomer/Withdrawal'),


  loginBusiness: require('../Controllers/UserBusiness/Login'),
  logoutBusiness: require('../Controllers/UserBusiness/Logout'),
  signupBusiness: require('../Controllers/UserBusiness/Signup'),
  infoChangeBusiness: require('../Controllers/UserBusiness/InformationChanging'),
  passwordChangeBusiness: require('../Controllers/UserBusiness/PasswordChanging'),
  reservationCheckBusiness: require('../Controllers/UserBusiness/ReservationListCheck').get,
  reservationApprovalBusiness: require('../Controllers/UserBusiness/ReservationListCheck').approval,
  reservationDisapprovalBusiness: require('../Controllers/UserBusiness/ReservationListCheck').disapproval,
  withdrawalBusiness: require('../Controllers/UserBusiness/Withdrawal')
};