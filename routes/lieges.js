const express = require("express");
const {
  getLieges,
  addLiege,
  removeLiege
} = require("../services/kingdom-store");

const router = express.Router();

router.get('/:kingdom/:castle', (req, res) => {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  let lieges = getLieges(kingdom, castle);
  res.render('lieges', { kingdom, castle, lieges });
});

router.post('/:kingdom/:castle', (req, res) => {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  addLiege(kingdom, castle, req.body.liege);
  const lieges = getLieges(kingdom, castle);
  res.render('lieges', { kingdom, castle, lieges });
});

// remove liege from a castle
router.post("/:kingdom/castles/:castle/lieges/:liege/remove", (req, res) => {
	
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  const liege = req.params.liege;
  
  removeLiege(kingdom, castle, liege);

  res.redirect("back");
});

module.exports = router;