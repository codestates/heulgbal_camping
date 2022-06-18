// const express = require('express');
// const router = express.Router();

// url별 분기
module.exports = {
  // default 
  campsite: require('../Controllers/Campsites/CampsiteList'),
  roomList: require('../Controllers/Campsites/RoomList'),
  reservation: require('../Controllers/Campsites/Reservation'),


  // related with user_customer
  login: require('../Controllers/UserCustomer/Login'),
  logout: require('../Controllers/UserCustomer/Logout'),
  signup: require('../Controllers/UserCustomer/Signup'),
  infoChange: require('../Controllers/UserCustomer/InformationChanging'),
  passwordChange: require('../Controllers/UserCustomer/PasswordChanging'),
  reservationCheck: require('../Controllers/UserCustomer/ReservationCheck').get,
  reservationCancel: require('../Controllers/UserCustomer/ReservationCheck').cancel,
  withdrawal: require('../Controllers/UserCustomer/Withdrawal'),

  //related with user_business
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

// router.use('/logout', loginBusiness);
// router.use('/login', logoutBusiness);
// router.use('/signup', signupBusiness);
// router.use('/:id/information', infoChangeBusiness);
// router.use('/:id/password', passwordChangeBusiness);
// router.use('/:id/withdrawal', withdrawalBusiness);
