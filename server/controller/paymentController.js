const Razorpay = require('razorpay');
require('dotenv').config();
const crypto = require("crypto");
const userModel = require("../models/userModel");
const paymentModel = require("../models/paymentModel");

module.exports.buySubscription = async (req, res) => {

    const id = req.body.id;
    const KEY = process.env.RAZORPAY_API_KEY;
    const SECRET = process.env.RAZORPAY_API_SECRET;
    const PLAN = process.env.PLAN_ID;

    const user = await userModel.findById(id);
    if (user.userRole === "admin")
        return res.status(201).json({
            success: false,
        })

    var instance = new Razorpay({ key_id: KEY, key_secret: SECRET })
    let subscription;
    const timestamp = Math.floor(Date.now() / 1000);
    try {
         subscription = await instance.subscriptions.create({
            plan_id: PLAN,
            customer_notify: 1,
            total_count: 1,
        });
    } catch (err) {
        console.log(err);
    }

    const updatedUser = await userModel.findOneAndUpdate(
        { _id: user._id },
        {
            $set: {
                'subscription.id': subscription.id,
                'subscription.status': subscription.status,
            },
        },
        { new: true }
    );
    console.log(subscription);
    return res.status(201).json({
        success: true,
        subscription
    })
}

module.exports.verify = async (req, res, next) => {
    const { razorpay_signature, razorpay_payment_id, razorpay_subscription_id, userId } = req.body;

    const user = await userModel.findById(userId);

    const subscription_id = user.subscription.id;

    const generated_signature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
        .update(razorpay_payment_id + "|" + subscription_id, "utf-8")
        .digest('hex');

    const isAuthentic = generated_signature === razorpay_signature;

    if (!isAuthentic) return res.status(201).json({
        success: false,
        subscriptionStatus: user.subscription.status
    })

    await paymentModel.create({
        razorpay_signature,
        razorpay_payment_id,
        razorpay_subscription_id,
        userId
    });

    user.subscription.status = "active";

    await user.save();

    return res.status(201).json({
        success: true,
        subscriptionStatus: user.subscription.status,
    })
}

module.exports.getrazorpaykey = async (req, res, next) => {
    res.status(200).json({
        success: true,
        key: process.env.RAZORPAY_API_KEY
    });
}

