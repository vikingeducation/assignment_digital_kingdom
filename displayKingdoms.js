var kingdomObject = require("./kingdom.json");

var returnKingdoms = function() {
  let kingdomArray = [];

  for (var k in kingdomObject) {
    // console.log(kingdomObject[k]["king"]);
    // console.log(k);
    kingdomArray.push(k);
  }
  return kingdomArray;
};

module.exports = { returnKingdoms: returnKingdoms };
