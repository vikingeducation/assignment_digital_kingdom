const express = require('express');
const { getKingdoms,
        getKings,
        getQueens,
        getCastles,
        getLieges,
        getVassals,
        addKingdoms,
        addCastles,
        addLieges,
        addVassals }  = require('../services/kingdoms-store');
const Handlebars = require('handlebars');

const router = express.Router();


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
  const kingName = req.body.kingName
  const queenName = req.body.queenName
  addKingdoms(name, kingName, queenName);
  res.redirect('back');
})

router.get("/kingdom/:id/castles", (req, res) => {
  const id = req.params.id;
  const kingdomsTree = getKingdoms();
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
  const castleId = req.params.castleid;
  const castlesTree = getCastles();
  const liegesTree = getLieges();
  const castleName = castlesTree[castleId]['name'];
  const liegeIds = castlesTree[castleId]['liegeIds'];
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


router.get("/kingdom/:id/castle/:castleid/lieges/:liegeid/vassals", (req, res) => {
  const id = req.params.id;
  const kingdomsTree = getKingdoms();
  const kingdomName = kingdomsTree[id]['name'];
  const castleId = req.params.castleid;
  const liegeId = req.params.liegeid;
  const liegesTree = getLieges();
  const vassalTree = getVassals();
  const liegeName = liegesTree[liegeId]['name'];
  const vassalIds = liegesTree[liegeId]['vassalIds'];
  res.render('liege/view', {  id,
                              kingdomName,
                              castleId,
                              liegeId,
                              vassalIds,
                              liegeName,
                              vassalTree
                          });
});

router.post('/kingdom/:id/castle/:castleid/lieges/:liegeid/vassals', (req, res) => {
  const liegeId = req.params.liegeid;
  const name = req.body.name
  addVassals(name, liegeId);
  res.redirect('back');
})


module.exports = router;
