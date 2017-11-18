'use strict';

const Express = require('express');
const router = Express.Router();
const Kingdoms = require('../services/kingdom_store.js');
const fs = require('fs');
const kingdomsObject = Promise.resolve(require('../data/kingdoms.json'));
const kingsObject = Promise.resolve(require('../data/kings.json'));
const queensObject = Promise.resolve(require('../data/queens.json'));
const castlesObject = Promise.resolve(require('../data/castles.json'));
const liegesObject = Promise.resolve(require('../data/lieges.json'));
const vassalsObject = Promise.resolve(require('../data/vassals.json'));

router.get('/', (req, res) => {
  let kingdoms;
  kingdomsObject
    .then(data => {
      kingdoms = data;
      return kingsObject;
    })
    .then(data => {
      kingdoms['1'].king = data['1'].name;
      return queensObject;
    })
    .then(data => {
      kingdoms['1'].queen = data['1'].name;
      res.render('homepage', { kingdoms });
    })
    .catch(err => res.render('error', { err }));
});

router.get('/kingdoms/:kingdom', (req, res) => {
  let castles;
  let kingdom;
  kingdomsObject
    .then(data => {
      kingdom = data[req.params.kingdom];
      return castlesObject;
    })
    .then(data => {
      kingdom.castles = kingdom.castleIds.map(val => data[val]);
      res.render('castles', { kingdom });
    })
    .catch(err => res.render('error,', { err }));
});

router.get('/kingdoms/:kingdom/castles/:castle', (req, res) => {
  let lieges;
  let castle;
  castlesObject
    .then(data => {
      castle = data[req.params.castle];
      return liegesObject;
    })
    .then(data => {
      castle.lieges = castle.liegeIds.map(val => data[val]);
      res.render('lieges', { castle });
    })
    .catch(err => res.render('error,', { err }));
});

// router.get(
//   '/kingdoms/:kingdom/castles/:castle/lieges/:liege',
//   (req, res) => {}
// );
//
// router.get(
//   '/kingdoms/:kingdom/castles/:castle/lieges/:lieges/vassals/:vassal',
//   (req, res) => {}
// );
//
// const pullData = () => {};

module.exports = router;

// return new Promise((resolve, reject) => {
//   fs.readFile('./seeds/kingdoms.json', 'utf8', (err, data) => {
//     err ? reject(err) : resolve(data);
//   });
// }).then(function(data) {
//   let newData = JSON.stringify(data);
//   res.send(data);
// });
