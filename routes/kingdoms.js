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

router.get("/kingdoms/:name", (req, res) => {
  const name = req.param.name
  const castles = Object.keys(castlesTree);
  res.render('kingdoms/show', { castles,
                                kingdomsTree: getKingdoms(),
                                castlesTree: getCastles()
                          });
});
// A view for each Kingdom.
// This page should list the names of each castle in the kingdom along with the number of lieges housed within each.
// This page should allow for the creation of new castles.



// A view for each Castle.
// A view for each Liege.
// A view for each Kingdom.


module.exports = router;
