const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Email can not be empty."] },
  password: { type: String, required: [true, "Password can not be empty"] },
  name: String,
  picture: {
    type: String,
    get: (path) => `${root}${path}`,
  },
  cv: {
    type: String,
    get: (path) => `${root}${path}`,
  },
});

mongoose.model = ("User", userSchema);
