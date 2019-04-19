const db = require("../models/user");

module.exports = {
  create: function (req, res) {
    console.log(req.body)
    db
      .create(req.body)
      .then(userModel => res.json(userModel))
      .catch(err => res.status(422).json(err));
  }
};