const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: string,
  description: string,
  salary: string,
  schedule: string,
  tags: [string],
});
