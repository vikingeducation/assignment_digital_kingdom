const express = require('express');
const { getKingdoms,
        getKings,
        getQueens,
        getCastles,
        getLieges,
        getVassals,
        addKingdoms }  = require('../services/kingdoms-store');
const Handlebars = require('handlebars');

const router = express.Router();

// const kingdomsTree = getKingdoms();
// const kingsTree = getKings();
// const queensTree = getQueens();
// const castlesTree = getCastles();
// const liegesTree = getLieges();
// const vassalsTree = getVassals();

// const kingdoms = Object.keys(kingdomsTree);
// const kings = Object.keys(kingsTree);
// const queens = Object.keys(queensTree);
// const castles = Object.keys(castlesTree);
// const lieges = Object.keys(liegesTree);
// const vassals = Object.keys(vassalsTree);


router.get("/", (req, res) => {
  const kingdoms = Object.keys( getKings() );
  res.render('kingdoms', {  kingdoms,
                            kingdomsTree: getKingdoms(),
                            kingsTree: getKings(),
                            queensTree: getQueens(),
                            castlesTree: getCastles()
                          });
});

router.post("/", (req, res) => {
  const name = req.body.name
  addKingdoms(name);
  res.redirect('back');
})

module.exports = router;
