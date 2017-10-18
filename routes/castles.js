const express = require('express');
const {
  getLieges,
  addCastle
} = require('../services/castle-store');
const lieges = require('./lieges');

const router = express.Router({ mergeParams: true });

router.get('/:castle', (req, res) => {
  const { kingdom, castle } = req.params;
  const allLieges = getLieges(kingdom, castle);
  res.render('lieges/show', { allLieges, castle, kingdom });
});

router.post('/', (req, res) => {
  const kingdom = req.params.kingdom;
  const name = req.body.name;
  console.log(kingdom, name);
  addCastle(kingdom, name);
  res.redirect('back');
});

router.use('/:castle/lieges', lieges);

module.exports = router;
