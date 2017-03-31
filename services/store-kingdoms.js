const lands = require('../lib/kingdoms.json');
const fs = require('fs');

const getJson = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

const addKingdom = (name) => {
  const json = getJson();



}

const saveJson = json => {
  fs.writeFileSync("kingdoms.json", JSON.stringify(json, null, 4));
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


