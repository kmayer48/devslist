const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('passport');
const authRoutes = require("./routes/auth/auth-routes")(passport);
const passportSetup = require('./config/passport-setup')(passport);
const keys = require("./config/keys")
const app = express();
const PORT = process.env.PORT || 3002;
const session = require('express-session');

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.use(session({
  secret: 'thesecret',
  saveUninitialized: false,
  resave: false
}));

// Passport middlewear
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use("/", routes);
app.use ("/auth", authRoutes);

const db = mongoose.connect('mongodb://localhost:27017/devslist', function (error) {
  if (error) console.log(error);

  console.log("connection successful");

  console.log(mongoose.connection.readyState);
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});