const jobList = (req, res, next) => {
  res.render("jobList", { title: "TIM - Jobs" });
};

module.exports = {
  jobList,
};
