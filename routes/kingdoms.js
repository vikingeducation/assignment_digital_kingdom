'use strict';

const Express = require('express');
const router = Express.Router();
const Kingdoms = require('../services/kingdom_store.js');
const fs = require('fs');

router.get('/', (req, res) => {
  let kingdoms = Kingdoms.getKingdoms().then(console.log);
});
module.exports = router;

// return new Promise((resolve, reject) => {
//   fs.readFile('./seeds/kingdoms.json', 'utf8', (err, data) => {
//     err ? reject(err) : resolve(data);
//   });
// }).then(function(data) {
//   let newData = JSON.stringify(data);
//   res.send(data);
// });
