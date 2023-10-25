const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title can not be empty."],
  },
  address: {
    type: String,
    required: [true, "Location can not be empty."],
  },
  description: {
    type: String,
    required: [true, "Description can not be empty."],
    //detailed job scope, recommended skills and experience, etc.
  },
  hourlyRate: {
    type: Number,
    min: 12.4,
    required: [true, "Hourly Rate can not be empty."],
  },
  weeklyHours: {
    type: Number,
    min: [4, "Minimum hours must be at least 4."],
  },
  schedule: [
    {
      type: String,
      enum: {
        values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        message: "{VALUE} is not supported.",
      },
      required: [true, "Schedule can not be empty."],
    },
  ],

  tags: [
    {
      type: String,
      required: [true, "Tag can not be empty."],
    },
  ],

  dateCreated: {
    type: Date,
    required: [true, "Date can not be empty."],
  },
});

mongoose.model("Job", jobSchema);
