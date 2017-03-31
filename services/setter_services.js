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
  const newKingdoms = kingdomArr.filter((element) => {
    element.name !== kingdomName;
  });
  json.kingdoms = newKingdoms;
  _saveJSON(json);
};

module.exports = {
  deleteKingdom
};
