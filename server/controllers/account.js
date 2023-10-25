const account = (req, res, next) => {
  res.render("account", { title: "TIM | Profile" });
};

const signIn = (req, res, next) => {
  res.render("signIn", { title: "TIM | Sign In" });
};

const signUp = (req, res, next) => {
  res.render("signUp", { title: "TIM | Sign Up" });
};

module.exports = {
  account,
  signIn,
  signUp,
};
