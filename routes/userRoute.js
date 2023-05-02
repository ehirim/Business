const express = require("express");
const { 
    registerUser, 
    loginUser,
    logout,
} = require("../controllers/userController");
const router = express.Router();


router.route("/signup").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

module.exports = router;