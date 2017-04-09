const fs = require('fs');

const _getJSON = () => {
  const data = fs.readFileSync("./data/kingdoms.json");
  return JSON.parse(data);
};

const _saveJSON = (json) => {
  fs.writeFileSync("./data/kingdoms.json", JSON.stringify(json, null, 4));
};

const _getObjectByName = (array, name) => {
  return array.find((element) => {
    return element.name === name;
  });
};

const _getArrayOfNames = (array) => {
  return array.map((element) => {
    return element.name;
  });
}





module.exports = {
	_getJSON,
  _saveJSON,
	_getArrayOfNames,
	_getObjectByName
}
