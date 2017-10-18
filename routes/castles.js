const express = require('express');
const {
  getLieges,
  addCastle
} = require('../services/castle-store');
const lieges = require('./lieges');

const router = express.Router({ mergeParams: true });

router.get('/:castle', (req, res) => {
  const path = req.originalUrl;
  const postPath = `${path}/lieges`;
  const { kingdom, castle } = req.params;
  const allLieges = getLieges(kingdom, castle, path);
  res.render('lieges/show', {
    allLieges, castle, kingdom, postPath
  });
});

router.post('/', (req, res) => {
  const kingdom = req.params.kingdom;
  const name = req.body.name;
  addCastle(kingdom, name);
  res.redirect('back');
});

router.use('/:castle/lieges', lieges);

module.exports = router;
