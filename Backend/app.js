var createError = require("http-errors");
var express = require("express");
var connectDB = require("./bin/dbConnection");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var userRouter = require("./Routes/userRoutes");

var app = express();

//connect DB
connectDB();

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use("/create", userRouter);

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
