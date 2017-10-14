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


router.get('/:id', (req, res) => {
  const kingdomIdx = req.params.id;
  const path = './data/kingdoms.json';

  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    }

    data = data.toString();
    data = JSON.parse(data);

    const kingdom = data.kingdoms[kingdomIdx];

    // show name of each castle in kingdom
    // show # of lieges in each castle
    const castlesArr = kingdom.castles;
    res.render('kingdom', {
      kingdomIdx: kingdomIdx,
      kingdomName: kingdom.name,
      castles: castlesArr
    });


  });

});


router.post('/:id/edit', (req, res) => {
  // edit the kingdom by adding new castle
  const kingdomIdx = req.params.id;
  const castleName = req.body.castleName;
  const path = './data/kingdoms.json';

  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    }

    data = data.toString();
    data = JSON.parse(data);

    const newCastle = {
      name: castleName
    };

    data.kingdoms[kingdomIdx].castles.push(newCastle);

    fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        throw err;
      }

      res.render('kingdom', {
        kingdomName: data.kingdoms[kingdomIdx].name,
        castles: data.kingdoms[kingdomIdx].castles,
        kingdomIdx: kingdomIdx
      })
    })


  })
});





module.exports = router;
