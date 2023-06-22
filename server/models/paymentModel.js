const mongoose = require("mongoose");

const payment = new mongoose.Schema(
    {
        razorpay_signature: {
            type: String,
            required: true,
        },
        razorpay_payment_id: {
            type: String,
            required: true,
        },
        razorpay_subscription_id: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const paymentModel = mongoose.model("Payment", payment);

module.exports = paymentModel;
