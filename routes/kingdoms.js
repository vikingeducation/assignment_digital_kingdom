const Express = require('express');
const router = Express.Router();
//const kingdoms = require("./seeds/kingdoms.json");
const fs = require('fs');

router.get('/', (req, res) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./seeds/kingdoms.json', 'utf8', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  }).then(function(data) {
    console.log(data);
    res.send(data);
  });
});
module.exports = router;
