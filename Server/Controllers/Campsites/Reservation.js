// 예약하기
const { Reservations, room, Users } = require('../../models'); 
const sequelize = require('../../models');
const { isAuthorized } = require('../TokenFunction');
const { QueryTypes } = require("sequelize");

 module.exports = async (req, res) => {
   // user_customer(예약자) 정보
   const userInfo = isAuthorized(req);
   const roomId = req.params.id;
   await Reservations.create({
    room_id : roomId, option_quantity: null,
    customer_id: userInfo.customer_id,
    business_number: "123123",
    people_count: null, room_approval_state: 'waiting'
   })
   .then(() => {
     return res.status(201).send('created!')
   })
 }