const express = require("express");
const router = express.Router();

const ctrlAccount = require("../controllers/account");
const ctrlJob = require("../controllers/job");
const ctrlAbout = require("../controllers/about");
const { isSignedIn } = require("../controllers/authController");

/* GET home page. */
router.get("/", ctrlJob.jobList);

router.get("/jobs/:jobId", ctrlJob.jobDetails);



router.get("/sign-up", ctrlAccount.signUp);

router.get("/sign-in", ctrlAccount.signIn);

router.get("/account", isSignedIn, ctrlAccount.account);

router.get("/about", ctrlAbout.about);

module.exports = router;
