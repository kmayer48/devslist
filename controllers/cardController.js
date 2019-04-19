const db = require("../models/card");

module.exports = {
  findAll: function(req, res) {
    db
      .find(req.query)
      .then(cardModel => res.json(cardModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req,res){
    db
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }

};

