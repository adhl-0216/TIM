const signIn = (req, res, next) => {
  res.render("signIn", { title: "TIM - Sign In" });
};

const signUp = (req, res, next) => {
  res.render("signUp", { title: "TIM - Sign Up" });
};

module.exports = {
  signIn,
  signUp,
};
