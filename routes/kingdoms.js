const express = require('express');
const router = express.Router();
const fs = require('fs');
const { readJSON, writeJSON, addCastle, addLiege } = require('../services/kingdoms-store.js');
const path = './data/kingdoms.json';



router.get('/', (req, res) => {
  readJSON(path)
    .then((data) => {
      const kingdomsArr = data.kingdoms;

      res.render('kingdoms', {
        kingdoms: kingdomsArr
      })
    })
    .catch((err) => {
      console.error(err);
    })
});


router.post('/new', (req, res) => {
  const { kingdom, king, queen } = req.body;

  const newKingdom = {
    name: kingdom,
    king: king,
    queen: queen,
    castles: [],
  };

  readJSON(path)
    .then((data) => {
      data.kingdoms.push(newKingdom);
      const newData = JSON.stringify(data, null, 2);

      writeJSON(path, newData);
      res.render('kingdoms', {
        kingdoms: data.kingdoms
      })

    })
    .catch((err) => {
      console.error(err);
    })
});


router.get('/:id', (req, res) => {
  const kingdomIdx = req.params.id;
  const path = './data/kingdoms.json';

  readJSON(path)
    .then((data) => {
      const kingdom = data.kingdoms[kingdomIdx];

      // show name of each castle in the kingdom
      const castlesArr = kingdom.castles;

      res.render('kingdom', {
        kingdomName: kingdom.name,
        kingdomIdx,
        castles: castlesArr,
      })
    })
    .catch((err) => {
      console.error(err);
    })
});


router.post('/:id/edit', (req, res) => {
  // edit the kingdom by adding new castle
  const kingdomIdx = req.params.id;
  const { castleName } = req.body;

  const newCastle = {
    name: castleName,
    lieges: [],
    vassals: [],
  };

  readJSON(path)
    .then((data) => {
      data = addCastle(data, newCastle, kingdomIdx);

      writeJSON(path, JSON.stringify(data, null, 2));

      res.render('kingdom', {
        kingdomName: data.kingdoms[kingdomIdx].name,
        castles: data.kingdoms[kingdomIdx].castles,
        kingdomIdx
      })

    })
    .catch((err) => {
      console.error(err);
    })
});


router.get('/:kingdomId/castles/:castleId', (req, res) => {
  const { kingdomId, castleId } = req.params;

  readJSON(path)
    .then((data) => {
      const castleData = data.kingdoms[kingdomId].castles[castleId];
      const { name, lieges, vassals } = castleData;

      res.render('castle', {
        castleName: name,
        lieges,
        vassals: vassals.length,
        kingdomId,
        castleId
      });

    })
    .catch((err) => {
      console.error(err);
    })

});


router.post('/:kingdomId/castles/:castleId/edit', (req, res) => {
  const { kingdomId, castleId } = req.params;
  const newLiege = req.body.liege;


  readJSON(path)
    .then((data) => {
      data = addLiege(data, kingdomId, castleId, newLiege);
      const castleData = data.kingdoms[kingdomId].castles[castleId];
      const { name, lieges, vassals } = castleData;

      writeJSON(path, JSON.stringify(data, null, 2));
      res.render('castle', {
        castleName: name,
        lieges,
        vassals: vassals.length,
        kingdomId,
        castleId
      });

    })
    .catch((err) => {
      console.error(err);
    })
});




module.exports = router;
