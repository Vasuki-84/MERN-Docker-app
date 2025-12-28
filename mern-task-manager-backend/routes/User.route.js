const express = require("express");
const { registerUser, loginUser } = require("../controllers/User.controller");

const router = express.Router();

// http://localhost:8081/user/register
router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports= router;