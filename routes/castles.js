const express = require("express");
const {
  getCastles,
  addCastle,
  removeCastle
} = require("../services/kingdom-store");

const router = express.Router();

router.get("/:kingdom", (req, res) => {
  const kingdom = req.params.kingdom;
  const castles = getCastles(kingdom);

  res.render('castles', { kingdom, castles });
});

router.post('/:kingdom', (req, res) => {
  const kingdom = req.params.kingdom;

  addCastle(kingdom, req.body.castle);

  const castles = getCastles(kingdom);
  res.render('castles', { kingdom, castles });
});

// remove castle from a kingdom
router.post("/:kingdom/castles/:castle/remove", (req, res) => {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;

  removeCastle(kingdom, castle);

  res.redirect('back')
});

module.exports = router;