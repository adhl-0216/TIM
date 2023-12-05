var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/sign-up", function (req, res) { 
	User.register(new User({ email: req.body.email, username: req.body.username }), req.body.password, function (err, user) { 
		if (err) { 
			res.json({ success: false, message: "Your account could not be saved. Error: " + err }); 
		} 
		else { 
			req.login(user, (err) => { 
				if (err) { 
					res.json({ success: false, message: err }); 
				} 
				else { 
					res.json({ success: true, message: "Your account has been saved" }); 
				} 
			}); 
		} 
	}); 
}); 

router.post("/sign-in", function (req, res) {
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  } else if (!req.body.password) {
    res.json({ success: false, message: "Password was not given" });
  } else {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({
            success: false,
            message: "username or password incorrect",
          });
        } else {
          const token = jwt.sign(
            { userId: user._id, username: user.username },
            secretkey,
            { expiresIn: "24h" }
          );
          res.json({
            success: true,
            message: "Authentication successful",
            token: token,
          });
        }
      }
    })(req, res);
  }
}); 



module.exports = router;
