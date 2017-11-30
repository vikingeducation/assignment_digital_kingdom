const express = require('express');
const { getKingdoms,
        getKings,
        getQueens,
        getCastles,
        getLieges,
        getVassals }  = require('../services/kingdoms-store');

const router = express.Router();

const kingdomsTree = getKingdoms();
const kingsTree = getKings();
const queensTree = getQueens();
const castlesTree = getCastles();
const liegesTree = getLieges();
const vassalsTree = getVassals();

const kingdoms = Object.keys(kingdomsTree);
const kings = Object.keys(kingsTree);
const queens = Object.keys(queensTree);
const castles = Object.keys(castlesTree);
const lieges = Object.keys(liegesTree);
const vassals = Object.keys(vassalsTree);
// This page should list each kingdom's King & Queen's names, as well as the number of castles in each kingdom.
// This page should allow for the creation of new Kingdoms.



router.get("/", (req, res) => {
  console.log(kingdomsTree);
  res.render('kingdoms', { kingdoms, kingdomsTree, kingsTree, queensTree, castlesTree });
});

module.exports = router;
