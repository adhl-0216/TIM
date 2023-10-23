var express = require("express");
var router = express.Router();

const ctrlAbout = require("../../server/controllers/about");
const ctrlUserAuth = require("../../server/controllers/userAuth");
const ctrlJob = require("../../server/controllers/job");
const ctrlProfile = require("../../server/controllers/profile");
/* GET home page. */
router.get("/", ctrlJob.jobList);
router.get("/sign-in", ctrlUserAuth.signIn);
router.get("/sign-up", ctrlUserAuth.signUp);
router.get("/about", ctrlAbout.about);
router.get("/profile", ctrlProfile.updateProfile);

module.exports = router;
