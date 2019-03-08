const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const KINGDOM = require('../services/kingdoms');
const CASTLES = require('../services/castles');

ROUTER.get('/:kingdomId', (req, res) => {
  let kingdomId = req.params.kingdomId;

  let castlesAndLieges = CASTLES.getCastlesAndLieges( kingdomId );

  //add kingdomId for its .hbs form
  let castleAndLiegesAndKingId = { castlesAndLieges: castlesAndLieges,
    kingdomId: kingdomId };

  res.render('partials/kingdomShow', { castles: castleAndLiegesAndKingId });

});

ROUTER.post('/:kingdomId', (req, res) => {
  let kingdomId = req.params.kingdomId;
  // console.log(req.body, '~~', req.params)
  
  CASTLES.createCastle(req.body.castleName, kingdomId)
  res.redirect("back");
});

module.exports = ROUTER;
