const express = require("express");
const router = express.Router();
const paymentsController = require("../controller/paymentController");

//Buy Subscription
router.post("/subscribe", paymentsController.buySubscription);

//Verify payment and save rerence in DB
router.post("/paymentverification", paymentsController.verify);

//Get Razorpay key 
router.get("/razorpaykey", paymentsController.getrazorpaykey);

module.exports = router;