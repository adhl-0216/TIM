var express = require("express");
var router = express.Router();

const ctrlJob = require("../controllers/job");
const ctrlUser = require("../controllers/user");
const { isSignedIn } = require("../../server/controllers/authController");

//job
router.route("/jobs").post(ctrlJob.jobCreate).get(ctrlJob.jobsByLatest);

router.route("/jobs/:jobId").get(ctrlJob.jobReadOne);

//account
// router
// .route("/user/:userId")
// .get(ctrlUser.userReadOne)
// .put(ctrlUser.userUpdateOne)
// .delete(ctrlUser.userDeleteOne);

router.get("/account", ctrlUser.userInfo);

module.exports = router;
