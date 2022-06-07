const express = require('express');
const router = express.Router();
const { UserBusinessController } = require('../Controllers');

router.get('/logout', UserBusinessController.logoutBusiness);
router.post('/login', UserBusinessController.loginBusiness);
router.post('/signup', UserBusinessController.signupBusiness);
router.patch('/:id/information', UserBusinessController.infoChangeBusiness);
router.patch('/:id/password', UserBusinessController.passwordChangeBusiness);
// router.get('/:id/reservations', UserBusinessController.reservationCheckBusiness.get);
// router.patch('/:id/reservations', UserBusinessController.reservationCheckBusiness.approval);
router.delete('/:id/withdrawal', UserBusinessController.withdrawalBusiness);

module.exports = router;

