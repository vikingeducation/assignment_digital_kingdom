const lands = require('../lib/kingdoms.json');
const fs = require('fs');

const getJson = (filename) => {
  const data = fs.readFileSync(filename);
  const json = JSON.parse(data);
  return json;
};

const addKingdom = (newKingdom, filename) => {
  const json = getJson(filename);
  if(!json.kingdoms[newKingdom.name]){
    var deepKingdom = {
      name: newKingdom.name,
      king: {
        name: newKingdom.kingName,
        age: newKingdom.kingAge,
      },
      queen: {
        name: newKingdom.queenName,
        age: newKingdom.queenAge,
      },
      castles: {}
    };
    json.kingdoms.push(deepKingdom)
  }
  return json
}

const saveJson = (json, filename) => {
  fs.writeFileSync(filename, JSON.stringify(json, null, 4));
};



const displayBasicInfo = () => {
  var kingdoms = {};
  lands.kingdoms.forEach((kingdom) => {
    kingdoms[kingdom.name] = {
      name: kingdom.name,
      king: kingdom.king,
      queen: kingdom.queen,
      castleCount: kingdom.castles.length,
    }
  })
  return kingdoms
}


module.exports = {
  displayBasicInfo,
  addKingdom,
  saveJson
}


