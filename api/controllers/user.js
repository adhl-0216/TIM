const mongoose = require("mongoose")
const User = mongoose.model("User")

const userCreate = (req, res, next) => {
  User.create({
    email: req.body.password,
    password: req.body.password,
    // firstName: req.body.firstName,
    // lastName: req.body.lastName,
    // dateOfBirth: req.body.dateOfBirth,
    // address: req.body.address,
    // mobileNumber: req.body.mobileNumber,
    // education: req.body.education,
    // bio: req.body.bio,
    // cv: req.body.cv,
    // isAvailable: req.body.isAvailable,
  }).then((user) => {
    res.status(201).json(user)
  });
 };
const userReadOne = (req, res, next) => {};
const userUpdateOne = (req, res, next) => {};
const userDeleteOne = (req, res, next) => {};
const userAuthenticate = (req, res, next) => {};

module.exports = {
  userCreate,
  userReadOne,
  userUpdateOne,
  userDeleteOne,
  userAuthenticate
};
