const mongoose = require("mongoose");
const Job = mongoose.model("Job");

const jobCreate = (req, res, next) => {
  Job.create({
    title: req.body.title,
    address: req.body.address,
    description: req.body.description,
    hourlyRate: req.body.hourlyRate,
    weeklyHours: req.body.weeklyHours,
    schedule: JSON.parse(req.body.schedule),
    tags: JSON.parse(req.body.tags),
    dateCreated: req.body.dateCreated,
  })
    .then((job) => {
      res.status(201).json(job);
    })
    .catch((err) => res.status(400).json(err));
};
const jobsByLatest = (req, res, next) => {
  Job.find()
  .sort({ dateCreated: -1 })
  .then((jobs) => {
      res.status(201).json(jobs);
    })
  .catch((err) => res.status(400).json(err));
};
const jobReadOne = (req, res, next) => {
  Job.findById(req.params.jobId)
    .then((job) => {
      job ? res.status(201).json(job) : res.status(404).json("message: Id Not Found");
    } )
    .catch((err) => res.status(400).json(err));
};


module.exports = {
  jobCreate,
  jobReadOne,
  jobsByLatest,
};
