const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlUser1 = require('../controllers/payment.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/PaymentDetail', ctrlUser1.paymentregister);
router.get('/getPaymentDetail',ctrlUser1.userDetail);
router.delete('/PaymentDetail/:id',ctrlUser1.DeletePaymentDetail);

module.exports = router;



