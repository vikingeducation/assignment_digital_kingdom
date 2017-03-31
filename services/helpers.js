const fs = require('fs');

const _getJSON = () => {
  const data = fs.readFileSync("./kingdoms.json");
  return JSON.parse(data);
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
	_getArrayOfNames,
	_getObjectByName
}
