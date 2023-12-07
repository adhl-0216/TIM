var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const flash = require("connect-flash");
require("./api/models/db");

const indexRouter = require("./server/routes/index");
const userRouter = require("./server/routes/user");
const apiRouter = require("./api/routes/index");

const passport = require("passport");
const User = require("./api/models/user");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

var app = express();

// view engine setup

app.set("views", path.join(__dirname, "server", "views"));
app.set("view engine", "pug");

app.use(flash());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "app_public")));

app.use("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  session({
    secret: "MTU Web Frameworks 2023",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//passport middleware
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Index Router

app.use("/", indexRouter);

//Authentication
app.use("/auth", userRouter);

//Data API
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
