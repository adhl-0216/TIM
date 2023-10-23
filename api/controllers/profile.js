const updateProfile = (req, res, next) => {
  res.render("updateProfile", { title: "TIM | Profile" });
};

const appliedJobs = (req, res, next) => {
  res.render("appliedJobs", { title: "TIM | Applications" });
};

module.exports = {
  updateProfile,
  appliedJobs,
};
