const fs = require("fs");

const getKingdomsObject = () => {
  const data = fs.readFileSync("./data/kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

class Kingdoms {
  constructor() {
    this.kingdomsObject = getKingdomsObject();
    console.log(this.kingdomsObject);
  }

  getKingdomNames() {
    let names = [];
    // console.log(this.kingdomsObject);

    for (let kingdom in this.kingdomsObject) {
      names.push(this.kingdomsObject[kingdom]["name"]);
    }
    return names;
  }

  getKingNames() {
    let kingIds = [];
    for (let kingdom in this.kingdomsObject) {
      kingIds.push(this.kingdomsObject[kingdom]["kingId"]);
    }
    const data = fs.readFileSync("./data/kings.json");
    const json = JSON.parse(data);
    return kingIds.map(id => json[id]["name"]);
  }

  getQueenNames() {
    let queenIds = [];
    for (let kingdom in this.kingdomsObject) {
      queenIds.push(this.kingdomsObject[kingdom]["queenId"]);
    }
    const data = fs.readFileSync("./data/queens.json");
    const json = JSON.parse(data);
    return queenIds.map(id => json[id]["name"]);
  }

  getCastleNumber() {
    let castleNumber = [];
    for (let kingdom in this.kingdomsObject) {
      castleNumber.push(this.kingdomsObject[kingdom]["castleIds"].length);
    }
    return castleNumber;
  }
}

module.exports = { Kingdoms, getKingdomsObject };
