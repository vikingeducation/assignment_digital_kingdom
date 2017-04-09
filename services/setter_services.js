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
    "queen": queen,
    "castles": []
  }
  kingdomArr.push(newKingdom);
  json.kingdoms = kingdomArr;
  _saveJSON(json);
}

const addCastle = (kingdomName, name) => {
  const json = _getJSON();
  const kingdom = json.kingdoms.filter((kingdom) => {
    return kingdom.name === kingdomName;
  })[0];
  kingdom.castles.push({
    "name": name,
    "lieges": []
  });
  json.kingdoms.map((savedKingdom) => {
    if (savedKingdom.name === kingdomName) {
      return kingdom;
    } else {
      return savedKingdom;
    }
  })
  _saveJSON(json);
} 

module.exports = {
  deleteKingdom,
  addKingdom,
  addCastle
};