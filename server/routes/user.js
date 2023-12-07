const express = require("express");
const router = express.Router();

const ctrlAuth = require("../controllers/authController");


router.post("/sign-up",ctrlAuth.registerUser);
router.post("/sign-in", ctrlAuth.signInUser);
router.get("/sign-out", ctrlAuth.signOutUser);

module.exports = router;