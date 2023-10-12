var express = require("express");
var router = express.Router();

const ctrlAbout = require("../controllers/about");
const ctrlRegister = require("../controllers/register");
const ctrlJob = require("../controllers/job");
/* GET home page. */
router.get("/", ctrlJob.jobList);
router.get("/Sign-in", ctrlRegister.signIn);
router.get("/Sign-up", ctrlRegister.signUp);
router.get("/About", ctrlAbout.about);
module.exports = router;
