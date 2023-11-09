var express = require("express");
var router = express.Router();

const ctrlUser = require("../controllers/user");
const ctrlJob = require("../controllers/job");

//job
router.route("/jobs").post(ctrlJob.jobCreate).get(ctrlJob.jobsByLatest);

router
  .route("/jobs/:jobId")
  .get(ctrlJob.jobReadOne)

//user
router
  .route("/user/:userId")
  .get(ctrlUser.userReadOne)
  .put(ctrlUser.userUpdateOne)
  .delete(ctrlUser.userDeleteOne);

router.route("/sign-in").post(ctrlUser.userAuthenticate);
router.route("/sign-up").post(ctrlUser.userCreate);

module.exports = router;
