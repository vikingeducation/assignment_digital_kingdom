const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const KINGDOMS = require('../services/kingdoms')

const FS = require('fs');


ROUTER.get('', (req, res) => {
  let data = KINGDOMS.getKingdomsKingsAndQueens();
  res.render('partials/kingdoms', { kingdoms: data } );
});

ROUTER.post('', (req, res) => {
  KINGDOMS.createKingdomsKingsAndQueens( req.body );
  res.redirect("back");
})

module.exports = ROUTER;
