const passport = require("passport");
const User = require("../../api/models/user");

// Register user
exports.registerUser = (req, res) => {
  res.render("signIn");
};

exports.postRegisterUser = (req, res, next) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.error("Error registering user:", err);
        return res.render("signIn", { error: err.message });
      }

      passport.authenticate("local")(req, res, () => {
        res.redirect("/");
      });
    }
  );
};

// Login user
exports.loginUser = (req, res) => {
  res.render("signUp");
};

exports.postLoginUser = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/sign-in",
  failureFlash: true,
});

// Logout user
exports.logoutUser = (req, res) => {
  req.logout();
  res.redirect("/");
};

// Middleware to check if the user is authenticated
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/sign-in");
};
