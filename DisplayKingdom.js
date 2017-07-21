var kingdomObject = require("./kingdom.json");

var DisplayKingdoms = function() {
  for (var k in kingdomObject) {
    console.log(kingdomObject[k]["king"]);
    console.log(k);
  }
};
DisplayKingdoms();
