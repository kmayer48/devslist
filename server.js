const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('passport');
const authRoutes = require("./routes/auth/auth-routes");
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const keys = require("./config/keys")
const app = express();
const PORT = process.env.PORT || 3002;

// cookie session info
app.use(cookieSession({
  maxAge: 2 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/", routes);

const db = mongoose.connect('mongodb://localhost:27017/devslist', function (error) {
  if (error) console.log(error);

  console.log("connection successful");

  console.log(mongoose.connection.readyState);
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});