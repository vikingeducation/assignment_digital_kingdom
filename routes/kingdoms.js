const express = require('express');
const { getKingdoms,
        getKings,
        getQueens,
        getCastles,
        getLieges,
        getVassals,
        addKingdoms,
        addCastles,
        addLieges }  = require('../services/kingdoms-store');
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

router.get("/kingdom/:id/castles", (req, res) => {
  const id = req.params.id;
  console.log('params are :')
  console.log(req.params)
  const kingdomsTree = getKingdoms();
  // console.log('kingdomsTree id is: ' + kingdomsTree[id])
  const kingdomName = kingdomsTree[id]['name'];
  const castleIds = kingdomsTree[id]['castleIds'];
  res.render('kingdom/view', {  id: req.params.id,
                                castleIds,
                                kingdomName,
                                castlesTree: getCastles()
                          });
});

router.post('/kingdom/:id/castles', (req, res) => {
  const kingdomId = req.params.id;
  const name = req.body.name
  addCastles(name, kingdomId);
  res.redirect('back');
})

router.get("/kingdom/:id/castle/:castleid/lieges", (req, res) => {
  const id = req.params.id;
  // console.log('params are :')
  // console.log(req.params)
  const castleId = req.params.castleid;
  const castlesTree = getCastles();
  const liegesTree = getLieges();
  console.log(castlesTree)
  const castleName = castlesTree[castleId]['name'];
  const liegeIds = castlesTree[id]['liegeIds'];
  res.render('castle/view', {  id,
                                castleId,
                                liegeIds,
                                castleName,
                                liegesTree
                          });
});

router.post('/kingdom/:id/castle/:castleid/lieges', (req, res) => {
  const id = req.params.id;
  const castleId = req.params.castleid;
  const name = req.body.name
  addLieges(name, castleId);
  res.redirect('back');
})


router.get("/kingdom/:id/castle/:castleid/lieges/:liegeid", (req, res) => {
  const id = req.params.id;
  const castleid = req.params.castleid;
  const liegeId = req.params.liegeid
  const vassalTree = getVassals();
  const LiegeName = liegesTree[id]['name'];
  const vassalIds = liegesTree[id]['castleIds'];
  res.render('liege/view', {  id,
                              castleid,
                              vassalIds,
                              liegeName,
                              vassalTree
                          });
});

router.post('/kingdom/:id/castle/:castleid/lieges/:liegeid', (req, res) => {
  const kingdomId = req.params.id;
  const name = req.body.name
  addCastles(name, kingdomId);
  res.redirect('back');
})


module.exports = router;
