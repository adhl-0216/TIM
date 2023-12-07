const passport = require("passport");
const User = require("../../api/models/user");

exports.registerUser = (req, res, next) => {
  User.register(new User({ username: req.body.username }), req.body.password)
    .then(() => {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.error("Error registering user:", err);
      return res.render("signUp", { error: err.message });
    });
};

exports.signInUser = passport.authenticate("local", {
  successRedirect: "/account",
  failureRedirect: "/sign-in",
  failureFlash: true,
});

exports.signOutUser = (req, res) => {
  req.logout(() => {
    res.redirect("/sign-in");
  });
};

// Middleware to check if the user is authenticated
exports.isSignedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.authenticatedUser = req.user;
    return next();
  }
  res.redirect("/sign-in");
};
