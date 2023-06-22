const ContactForm = require("../models/contactModel");

class Contact {

    async postContactForm(req, res) {
        try {
            const { name, companyName, mobileNumber, email, service } = req.body;

            if (!name || !companyName || !mobileNumber || !email || !service) {
                return res.status(400).json({ error: "All fields are required" });
            }

            const contactForm = new ContactForm({
                name,
                companyName,
                mobileNumber,
                email,
                service
            });

            await contactForm.save();

            res.json({ message: "Contact form submitted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
        }
    }


    async getContactForms(req, res) {
        try {
            const contactForms = await ContactForm.find();

            res.json(contactForms);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
        }
    }

}

const contactController = new Contact();
module.exports = contactController;
