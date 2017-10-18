const express = require('express');
const {
  getVassals,
  addLiege,
  addVassal
} = require('../services/liege-store');

const router = express.Router({ mergeParams: true });

router.get('/:liege', (req, res) => {
  const { kingdom, castle, liege } = req.params;
  const allVassals = getVassals(kingdom, castle, liege);
  res.render('vassals/show', {
    allVassals, castle, liege, kingdom
  });
});

router.post('/', (req, res) => {
  const { kingdom, castle } = req.params;
  const name = req.body.name;
  addLiege(kingdom, castle, name);
  res.redirect('back');
});

router.post('/:liege/vassals', (req, res) => {
  const { kingdom, castle, liege } = req.params;
  const name = req.body.name;
  addVassal(kingdom, castle, liege, name);
  res.redirect('back');
});

// router.use('/:kingdom/:castle/:liege', vassals);

module.exports = router;
