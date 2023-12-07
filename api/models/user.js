const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username can not be empty."],
    unique: true,
  },
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  address: String,
  mobileNumber: String,
  email: String,
  education: String,
  bio: String,
  cv: {
    type: String,
    get: (path) => `${root}${path}`,
  },
  isAvailable: Boolean,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
