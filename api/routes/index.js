var express = require("express");
var router = express.Router();

const ctrlUser = require("../controllers/user");
const ctrlJob = require("../controllers/job");

//job
router.route("/jobs").post(ctrlJob.jobCreate).get(ctrlJob.jobsByLatest);

router
  .route("/jobs/:jobId")
  .get(ctrlJob.jobReadOne)
  .put(ctrlJob.jobUpdateOne)
  .delete(ctrlJob.jobDeleteOne);
//user
router
  .route("/users")
  .post(ctrlUser.userCreate)
  .get(ctrlUser.userReadOne)
  .put(ctrlUser.userUpdateOne)
  .delete(ctrlUser.userDeleteOne);

module.exports = router;
