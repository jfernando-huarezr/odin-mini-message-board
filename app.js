require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");

var indexRouter = require("./routes/indexRouter");
var messageRouter = require("./routes/messageRouter");

var app = express();

//connection to database mongoose atlas
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongoDB = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@node-basics.oxexicp.mongodb.net/message_board?retryWrites=true&w=majority&appName=node-basics`;

async function connectMongoDB() {
  try {
    await mongoose.connect(mongoDB);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
}

connectMongoDB();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//setup routers to use
app.use("/", indexRouter);
app.use("/message", messageRouter);

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
