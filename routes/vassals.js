const express = require("express");
const {
  getVassals,
  addVassal
} = require("../services/kingdom-store");

const router = express.Router();

router.get('/:kingdom/:castle/:liege', (req, res) => {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  const liege = req.params.liege;
  const vassals = getVassals(kingdom, castle, liege);

  res.render('vassals', { kingdom, castle, liege, vassals });
});

router.post('/:kingdom/:castle/:liege', (req, res) => {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  const liege = req.params.liege;

  addVassal(kingdom, castle, liege, req.body.vassal);

  const vassals = getVassals(kingdom, castle, liege);
  res.render('vassals', { kingdom, castle, liege, vassals });
});


module.exports = router;