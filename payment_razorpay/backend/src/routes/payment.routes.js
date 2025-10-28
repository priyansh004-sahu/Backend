const express = require('express');
const paymentController = require("../controllers/payment.controller");

const router = express.Router();


router.post('/createOrder', paymentController.createOrder);

router.post('/verify', paymentController.verifyPayment);

module.exports = router;