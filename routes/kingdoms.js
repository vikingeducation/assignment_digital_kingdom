const express = require('express');
const { getKingdoms,
        getKings,
        getQueens,
        getCastles,
        getLieges,
        getVassals,
        addKingdoms,
        addCastles }  = require('../services/kingdoms-store');
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


router.get('/kingdoms', (req, res) => {
  const kingdoms = Object.keys( getKings() );
  res.render('kingdoms', {  kingdoms,
                            kingdomsTree: getKingdoms(),
                            kingsTree: getKings(),
                            queensTree: getQueens(),
                            castlesTree: getCastles()
                          });
});

router.post('/kingdoms', (req, res) => {
  const name = req.body.name
  addKingdoms(name);
  res.redirect('back');
})

router.get("/kingdom/:id", (req, res) => {
  const id = req.params.id;
  const kingdomsTree = getKingdoms();
  const kingdomName = kingdomsTree[id]['name'];
  const castleIds = kingdomsTree[id]['castleIds'];
  res.render('kingdom/view', {  id,
                                castleIds,
                                kingdomName,
                                castlesTree: getCastles()
                          });
});

router.post('/kingdom/:id', (req, res) => {
  const kingdomId = req.params.id;
  const name = req.body.name
  addCastles(name, kingdomId);
  res.redirect('back');
})



// A view for each Castle.
// A view for each Liege.
// A view for each Kingdom.


module.exports = router;
