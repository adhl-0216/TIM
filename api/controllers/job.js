const mongoose = require("mongoose");
const Job = mongoose.model("Job");

const jobCreate = (req, res, next) => {
  Job.create({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    hourlyRate: req.body.hourlyRate,
    weeklyHours: req.body.weeklyHours,
    schedule: req.body.schedule,
    tags: req.body.tags,
    dateCreated: req.body.dateCreated,
  }).then((err, job) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(job);
    }
  });
};
const jobsByLatest = (req, res, next) => {};
const jobReadOne = (req, res, next) => {};
const jobUpdateOne = (req, res, next) => {};
const jobDeleteOne = (req, res, next) => {};

module.exports = {
  jobCreate,
  jobReadOne,
  jobUpdateOne,
  jobDeleteOne,
  jobsByLatest,
};
