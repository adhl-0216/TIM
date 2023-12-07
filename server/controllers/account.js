const { isSignedIn } = require("./authController");

const account = (req, res, next) => {
  const user = req.authenticatedUser;
  res.render("userAccount", { title: "TIM | Profile", user: user });
};

const signIn = (req, res, next) => {
  res.render("signIn", { title: "TIM | Sign In", error: req.flash("error") });
};

const signUp = (req, res, next) => {
  res.render("signUp", { title: "TIM | Sign Up"});
};

module.exports = {
  account,
  signIn,
  signUp,
};
