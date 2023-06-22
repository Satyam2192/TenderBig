const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema);

module.exports = ContactForm;
