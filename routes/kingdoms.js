const express = require('express');
const router = express.Router();
const fs = require('fs');
const { castlesCounter } = require('../services/kingdoms-store.js');



router.get('/', (req, res) => {
  const path = './data/kingdoms.json';

  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    }

    data = data.toString();
    data = JSON.parse(data);

    // get kingdoms array
    const kingdomsArr = data.kingdoms;
    // display king name, queen name, kingdom name, # of castles in kingdom in view
    res.render('kingdoms', {
      kingdoms: kingdomsArr
    });
  });
});

router.post('/new', (req, res) => {
  const { kingdom, king, queen } = req.body;
  const path = './data/kingdoms.json';
  let newKingdoms;

  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    }

    data = data.toString();
    data = JSON.parse(data);

    const newKingdom = {
      name: kingdom,
      king: king,
      queen, queen
    }

    data.kingdoms.push(newKingdom);
    newKingdoms = data;

    fs.writeFile(path, JSON.stringify(newKingdoms, null, 2), (err) => {
      if (err) {
        throw err;
      }

      res.render('kingdoms', {
        kingdoms: newKingdoms.kingdoms
      });
    });

  });
});














module.exports = router;
