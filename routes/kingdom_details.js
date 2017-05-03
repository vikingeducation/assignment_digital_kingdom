var express = require('express');
var router = express.Router();
const feudal = require('../bin/feudal');
const debug = require('debug')('feudal');


/* GET kingdoms listing. */
router.get('/', function(req, res, next) {
  const kingdoms = feudal.getKingdoms();
  res.render('index', { title: 'Digital Kingdoms of the World', kingdoms: kingdoms });
});

// add kingdom
router.post('/', function(req, res, next) {
  feudal.addKingdom(req.body.name, req.body.king, req.body.queen);
  res.redirect("back");
});

// get kingdom details (castles)
router.get('/:kingdom', function(req, res, next) {
  const kingdom = req.params.kingdom;
  debug(`in router requesting details on ${kingdom}`);
  const child = feudal.getMinions('kingdoms.' + kingdom);
  res.render('details', { title: 'Digital Kingdoms of the World',
                          kingdom: kingdom,
                          castle: null,
                          liege: null,
                          header1: 'Castle',
                          header2: 'Liege',
                          action: '/kingdoms/' + kingdom,
                          children: child });
});

// add castles
router.post('/:kingdom', function(req, res, next) {
  feudal.addMinion('kingdoms.' + req.params.kingdom, req.body.name, 'castle');
  res.redirect("back");
});

// get castle details (lieges)
router.get('/:kingdom/:castle', function(req, res, next) {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  debug(`in router requesting details on ${kingdom} castle ${castle}`);
  const child = feudal.getMinions('kingdoms.' + kingdom + '.child.' + castle);
  res.render('details', { title: 'Digital Kingdoms of the World',
                          kingdom: kingdom,
                          castle: castle,
                          liege: null,
                          header1: 'Liege',
                          header2: 'Vassal',
                          action: '/kingdoms/' + kingdom + '/' + castle,
                          children: child });
});

// add lieges
router.post('/:kingdom/:castle', function(req, res, next) {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  debug(`addig liege ${req.body.name} to castle ${castle}`);
  feudal.addMinion('kingdoms.' + kingdom + '.child.' + castle, req.body.name, 'liege');
  res.redirect("back");
});

// get liege details (vassals)
router.get('/:kingdom/:castle/:liege', function(req, res, next) {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  const liege = req.params.liege;
  debug(`in router requesting details on ${kingdom} castle ${castle} liege ${liege}`);
  const child = feudal.getMinions('kingdoms.' + kingdom + '.child.' + castle + '.child.' + liege);
  res.render('details', { title: 'Digital Kingdoms of the World',
                          kingdom: kingdom,
                          castle: castle,
                          liege: liege,
                          header1: 'Vassal',
                          header2: null,
                          action: '/kingdoms/' + kingdom + '/' + castle + '/' + liege,
                          children: child });
});

// add vassals
router.post('/:kingdom/:castle/:liege', function(req, res, next) {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  const liege = req.params.liege;
  debug(`adding vassal ${req.body.name} to castle ${castle} liege ${liege}`);
  feudal.addMinion('kingdoms.' + kingdom + '.child.' + castle + '.child.' + liege, req.body.name, 'vassal');
  res.redirect("back");
});

module.exports = router;
