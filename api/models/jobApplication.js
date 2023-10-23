const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.ObjectId, required: true },
  jobId: { type: mongoose.ObjectId, required: true },
  status: {
    type: String,
    enum: {
      values: ["pending", "accepted", "rejected"],
      message: "{VALUE} is not supported",
    },
    required: [true, "Invalid status"],
  },
});

mongoose.model = ("JobApplication", jobApplicationSchema);
