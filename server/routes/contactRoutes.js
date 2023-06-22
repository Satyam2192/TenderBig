const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");

router.post("/post-contactform", contactController.postContactForm);
router.get("/get-allcontactforms", contactController.getContactForms);

module.exports = router;
