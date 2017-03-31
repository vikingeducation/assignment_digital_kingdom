const fs = require('fs');
const {
  _getJSON,
  _saveJSON,
  _getArrayOfNames,
  _getObjectByName
} = require('./helpers');


const deleteKingdom = (kingdomName) => {
  const json = _getJSON();
  const kingdomArr = json.kingdoms;

  const newKingdoms = kingdomArr.filter((kingdom) => {
    console.log("inside filter" + kingdom.name);
    return kingdom.name != kingdomName;
  });

  json.kingdoms = newKingdoms;

  _saveJSON(json);
};


const addKingdom = (name, king, queen) => {
  const json = _getJSON();
  const kingdomArr = json.kingdoms;
  const newKingdom = {
    "name": name,
    "king": king,
    "queen": queen
  }
  kingdomArr.push(newKingdom);
  json.kingdoms = kingdomArr;
  _saveJSON(json);
}

module.exports = {
  deleteKingdom,
  addKingdom
};