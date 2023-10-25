const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Email can not be empty."] },
  password: { type: String, required: [true, "Password can not be empty"] },
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

mongoose.model("User", userSchema);
