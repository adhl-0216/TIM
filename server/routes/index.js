var express = require("express");
var router = express.Router();

const ctrlAbout = require("../controllers/about");
const ctrlUserAuth = require("../controllers/userAuth");
const ctrlJob = require("../controllers/job");
const ctrlProfile = require("../controllers/profile");
/* GET home page. */
router.get("/", ctrlJob.jobList);
router.get("/sign-in", ctrlUserAuth.signIn);
router.get("/sign-up", ctrlUserAuth.signUp);
router.get("/about", ctrlAbout.about);
router.get("/profile", ctrlProfile.profile);

module.exports = router;
