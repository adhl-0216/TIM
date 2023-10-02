const signIn = (req, res, next) => {
  res.render("signIn", { title: "Sign In" });
};

const signUp = (req, res, next) => {
  res.render("signUp", { title: "Sign Up" });
};

module.exports = {
  signIn,
  signUp,
};
