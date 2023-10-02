var express = require("express");
var router = express.Router();

const ctrlRegister = require("../controllers/register");
const ctrlJob = require("../controllers/job")
/* GET home page. */
router.get("/", ctrlJob.home);
router.get("/sign-in", ctrlRegister.signIn);
router.get("/sign-up", ctrlRegister.signUp);
module.exports = router;
