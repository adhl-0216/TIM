var express = require("express");
var router = express.Router();

const ctrlAbout = require("../controllers/about");
const ctrlRegister = require("../controllers/register");
const ctrlJob = require("../controllers/job");
const ctrlProfile = require("../controllers/profile");
/* GET home page. */
router.get("/", ctrlJob.jobList);
router.get("/sign-in", ctrlRegister.signIn);
router.get("/sign-up", ctrlRegister.signUp);
router.get("/about", ctrlAbout.about);
router.get("/profile", ctrlProfile.updateProfile);
module.exports = router;
