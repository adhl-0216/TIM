const mongoose = require("mongoose");
const { isSignedIn } = require("../../server/controllers/authController");
const User = mongoose.model("User");

exports.userInfo = (res, req, next) => {
  res.json({message: "Im here "})
}
