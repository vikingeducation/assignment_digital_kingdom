// APP
const fs = require('fs');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  // helpers: helpers.registered
});

const getKingdomsObject = () => {
  const data = fs.readFileSync('./data/kingdoms.json');
  const json = JSON.parse(data);
  return json;
};

class Kingdoms {
  constructor(kingdomsObject) {
    this.kingdomsObject = kingdomsObject;
  }

  getKingdomNames() {
    let names = [];
    for (kingdom in this.kingdomsObject) {
      names.push(this.kingdomsObject[kingdom]['name']);
    }
    return names;
  }

  getKingNames() {
    let kingIds = [];
    for (kingdom in this.kingdomsObject) {
      kingIds.push(this.kingdomsObject[kingdom]['kingId']);
    }
    const data = fs.readFileSync('./data/kings.json');
    const json = JSON.parse(data);
    return kingIds.map(id => json[id]['name']);
  }

  getQueenNames() {
    let queenIds = [];
    for (kingdom in this.kingdomsObject) {
      queenIds.push(this.kingdomsObject[kingdom]['queenId']);
    }
    const data = fs.readFileSync('./data/queens.json');
    const json = JSON.parse(data);
    return queenIds.map(id => json[id]['name']);
  }

  getCastleNumber() {
    let castleNumber = [];
    for (kingdom in this.kingdomsObject) {
      castleNumber.push(this.kingdomsObject[kingdom]['castleIds'].length);
    }
    return castleNumber;
  }
}

const kingdomsObject = getKingdomsObject();
const kingdomNames = getKingdomNames(kingdomsObject);
const kingNames = getKingNames(kingdomsObject);
const queenNames = getQueenNames(kingdomsObject);
const castleNumber = getCastleNumber(kingdomsObject);

console.log(castleNumber);
/*
const getKingName = (kingdomNames, KingdomsObject) => {
  KingdomsObject[KingdomID]
}

const kingName;
*/

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

const kingdomCount = _.range(kingdomNames.length);

app.get('/', (req, res) => {
  res.render('kingdoms', {
    kingdomCount: kingdomCount,
    kingdomNames: kingdomNames,
    kingNames: kingNames,
    queenNames: queenNames,
    castleNumber: castleNumber,
  });
});

app.listen(3000, () => {
  console.log('server started');
});
