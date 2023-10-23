const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: string,
  email: string,
  password: string,
  resume: string,
  coverLetter: string,
});
