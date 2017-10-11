const fs = require("fs");

const getJson = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

const saveJson = json => {
  fs.writeFileSync("kingdoms.json", JSON.stringify(json, null, 4));
};

const searchArray = (name, array) => {

  for (let i = 0; i < array.length; i++ ){
    if (array[i].name === name){
      console.log(array[i]);
      return array[i]
    }
  }
  // array.forEach(obj => {
  //   if (obj.name === name) {
  //     var search = obj
  //     console.log("search", search)
  //     return search;
  //   }
  // })
  return search
}

const getKingdoms = () => {
  const json = getJson();
  const kingdoms = json.kingdom;
  return kingdoms;
};

const addKingdom =(name, king, queen) => {
  const json = getJson();
  if (json.kingdom[name]) return;
  json.kingdom.push({
    name,
    king,
    queen,
    "castles": []
  });
  saveJson(json);
}

const getCastles = (kngdm) => {
  const json = getJson()
  const kingdom =  searchArray(kngdm, json.kingdom)
  const castles = kingdom.castles
  console.log("castles" , castles)
  return castles;
}

const getLieges = (kingdom, castle) => {
  const castlesData = getCastles(kingdom);
  const vassals = Object.keys(castlesData[castle])
  return vassals
}

const getVassals = (kingdom, castle) => {
  const castlesData = getCastles(kingdom);
  const vassals = Object.keys(castlesData[castle])
  return vassals
}

module.exports = {
  getKingdoms,
  addKingdom,
  getCastles,
  getVassals
}
