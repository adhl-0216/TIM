const about = (req, res, next) => {
  res.render("about", { title: "TIM | About" });
};

module.exports = {
  about,
};
