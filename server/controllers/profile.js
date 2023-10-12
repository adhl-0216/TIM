const updateProfile = (req, res, next) => {
  res.render("updateProfile", { title: "TIM | Profile" });
};

const appliedJobs = (req, res, next) => {
  res.render("profile", { title: "TIM | Profile" });
};

module.exports = {
  updateProfile,
  appliedJobs,
};
