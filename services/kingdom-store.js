const fs = require('fs');

const getJson = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

const getKingdoms = () => {
  const json = getJson();
  return json.kingdoms;
};

const getRulers = (kingdom) => {
  const json = getJson();
  let rulers = {};
  rulers.king = json.kingdoms[kingdom].king;
  rulers.queen = json.kingdoms[kingdom].queen;
  console.log(rulers);
  return rules;
};

//returns array of castles
const getCastles = (searchKingdom) => {
  //array of kingdom objects
  const json = getKingdoms();

  //filter array by kingdomName key in each object
  let selectedKingdom = (json.find( (kingdom) => {
    return kingdom.kingdomName === searchKingdom;
  }));

  return selectedKingdom.castles;
};



module.exports = {
  getKingdoms,
  getRulers,
  getCastles
};
