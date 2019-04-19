const router = require("express").Router();
const cardController = require("../../controllers/cardController");

router.route("/")
  .get((req, res) => {
  cardController.findAll(req, res)
});

router.route("/profile/:id")
.get(cardController.findById)

module.exports = router;