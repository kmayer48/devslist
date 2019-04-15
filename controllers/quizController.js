const db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log(req.body)
    db.Quiz
      .create(req.body)
      .then(quizModel => res.json(quizModel))
      .catch(err => res.status(422).json(err));
    // res.send('working')
  }
};