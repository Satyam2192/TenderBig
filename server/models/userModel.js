const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            index: { unique: true }
        },
        name: {
            type: String,
            required: [true, "Please enter your name."],
            maxlength: 32,
        },
        email: {
            type: String,
            required: [true, "Please enter your email."],
            index: { unique: true },
            validate: validator.isEmail
        },
        password: {
            type: String,
            required: [true, "Please enter your password."],
            minlength: [8, "Password must be at least 8 characters"],
        },
        userRole: {
            type: String,
            enum: ["admin", "employee", "hr", "user"],
            default: "user"
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        subscription: {
            id: String,
            status: String,
            plan: {
                type: String,
                enum: ["OneState", "FiveStates", "AllIndia", "Global"],
                stateNames: [String] 
            }
        },
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        ResetPasswordToken: String,
        ResetPasswordEcpire: String
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
                delete ret.createdAt;
                delete ret.updatedAt;
            },
        },
    },
    { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
