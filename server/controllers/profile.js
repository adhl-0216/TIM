const profile = (req, res, next) => {
  res.render("profile", { title: "TIM | Profile" });
};


module.exports = {
  profile
};
