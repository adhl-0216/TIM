var express = require("express");
var router = express.Router();

const ctrlRegister = require("../controllers/register");
/* GET home page. */
router.get("/", ctrlRegister.signIn);
router.get("/sign-up", ctrlRegister.signUp);
module.exports = router;
