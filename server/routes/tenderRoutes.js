const express = require("express");
const router = express.Router();
const tenderController = require("../controller/tenderController");
const {verifyToken , isNotUser} = require("../middleware/auth")

//To get all tenders registered and can also be filtered based on approved status and active
router.get("/all-tenders", verifyToken, tenderController.getAllTender);

//Prograsive search by query in url
router.get("/search", verifyToken, tenderController.search);

//Search from Form Data filled 
router.post("/advance-search", verifyToken, tenderController.advanceSearch);

//Submit a new tender
router.post("/add-tender", verifyToken, tenderController.postAddTender);

//Edit an existing tender
router.post("/tender/edit/:tenderId", verifyToken, tenderController.postEditTender);

//Get all details of a single tender
router.get("/tender/:tenderId", verifyToken, tenderController.getSingleTender);

//All thender by a user
router.get("/tender/byuserid", verifyToken, tenderController.getTendersByUserId);

//Switch approved status of a tender
router.post("/tender/:tenderId/switchApprovedStatus", verifyToken, isNotUser, tenderController.switchStatus);

//Switch active status of a tender
router.post("/tender/:tenderId/switchActiveStatus", verifyToken, isNotUser, tenderController.switchActive);

module.exports = router;