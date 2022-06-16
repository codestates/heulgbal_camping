const express = require('express');
const router = express.Router();
const app = express();

const CampsiteList = require('./Campsites/CampsiteList');
const Reservation = require('./Campsites/Reservation');
const RoomList = require('./Campsites/RoomList');
const login = require;
//default API
router.get('/', (req, res) => {
  res.send('welcome heulgbalcamping!');
});

router.get('/campsites', CampsiteList);
router.get('/campsites/:id/rooms', RoomList);
router.post('/campsites/:id/rooms/:id/reservation', Reservation);

// roomList: require('./Campsites/{id}/rooms'),
// reservation: require('./Campsites/{id}/rooms/{id}/reservation'),
// related with user_customer
// login: require('./user/login'),
// signup: require('./user/signup'),
// mypage: require('./user/{id}'),
// infoChange: require('./user/{id}/information'),
// passwordChange: require('./user/{id}/password'),
// reservationCheck: require('./user{id}/reservations'),
// withdrawal: require('./user/{id}/withdrawl'),
// //related with user_business
// loginBusiness: require('./business/login'),
// signupBusiness: require('./business/signup'),
// mypageBusiness: require('./business/{id}'),
// infoChangeBusiness: require('./business/{id}/information'),
// passwordChangeBusiness: require('./business/{id}/password'),
// reservationCheckBusiness: require('./business/{id}/reservations'),
// withdrawalBusiness: require('./business/{id}/withdrawal'),
module.exports = router;
