const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Email can not be empty."], unique: true },
  password: { type: String, required: [true, "Password can not be empty"], unique: true },
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  address: String,
  mobileNumber: String,
  education: String,
  bio: String,
  cv: {
    type: String,
    get: (path) => `${root}${path}`,
  },
  isAvailable: Boolean,
});


userSchema.plugin(passportLocalMongoose);

module.exports =  mongoose.model("User", userSchema);
