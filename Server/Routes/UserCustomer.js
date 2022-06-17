const express = require('express');
const router = express.Router();
const  UserCustomerController  = require('../Controllers/Index');

router.get('/logout', UserCustomerController.logout);
router.post('/login', UserCustomerController.login);
router.post('/signup', UserCustomerController.signup);
router.patch('/:id/information', UserCustomerController.infoChange);
router.patch('/:id/password', UserCustomerController.passwordChange);
router.get('/:id/reservations', UserCustomerController.reservationCheck);
router.delete('/:id/reservations', UserCustomerController.reservationCancel);
router.delete('/:id/withdrawal', UserCustomerController.withdrawal);

module.exports = router;
