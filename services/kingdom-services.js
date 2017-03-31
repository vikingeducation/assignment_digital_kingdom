const fs = require('fs');

const getKingdoms = () => {
  const data = fs.readFileSync("./kingdoms.json");
  const json = JSON.parse(data);
  const kingdomsArr = json.kingdoms.map((element) => {
    return element.name;
  });
  return kingdomsArr;
};

const getKingdomInfo = (kingdomName) => {
  const data = fs.readFileSync("./kingdoms.json");
  const json = JSON.parse(data);
  const kingdomsArr = json.kingdoms.map((element) => {
    return element.name;
  });
  return kingdomsArr;
};

module.exports = {
	getKingdoms
};
