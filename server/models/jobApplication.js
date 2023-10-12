const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  userId: ObjectId,
  jobId: ObjectId,
  status: "pending" || "accepted" || "rejected",
});
