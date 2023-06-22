const express = require("express");
const router = express.Router();
const usersController = require("../controller/userController");
const {isAdmin, verifyToken, isNotUser } = require("../middleware/auth")

//Get user deatils
router.get("/single-user", verifyToken, usersController.getSingleUser);

//To get all users
router.get("/allusers", verifyToken, usersController.getAllUser);

//To update user role
router.post("/updaterole", verifyToken, usersController.updateUserRole);

//Delete user
router.delete("/delete/:userId", verifyToken, usersController.deleteUser);

//New users
router.get("/created/:weeks", verifyToken, usersController.newUsers);

module.exports = router;
