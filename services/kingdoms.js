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
  // return search
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
  return castles;
}

const addCastle = (name, kngdm) => {
  var json = getJson();

  json.kingdom.forEach(obj => {
    if (obj.name === kngdm){
      obj.castles.push({
        name,
        "lieges": []
      })
    }
  })

  saveJson(json)
}

const getLieges = (kngdm, castle) => {
  const castlesData = getCastles(kngdm);
  const foundcastle = searchArray(castle, castlesData)
  return foundcastle;
}

const addLiege = (kngdm, castle, name) => {
  var json = getJson();

  json.kingdom.forEach(obj => {
    if (obj.name === kngdm){
      console.log("found kingdom");
      obj.castles.forEach(cstl => {
        if (cstl.name === castle){
          console.log("found castle,", cstl);
          cstl.lieges.push({
            name,
            "vassals" :[]
          })
          console.log("cstl", cstl)
        }
      })
    }
  })

  saveJson(json)

}

const getVassals = (kngdm, castle, liege) => {
  const liegeData = getLieges(kngdm, castle);
  const foundLiege = searchArray(liege, liegeData.lieges)
  return foundLiege
}

const addVassal = (kngdm, castle, liege, name) => {

  var json = getJson();

  json.kingdom.forEach(obj => {
    if (obj.name === kngdm){
      console.log("found kingdom");
      obj.castles.forEach(cstl => {
        if (cstl.name === castle){
          console.log("found castle,", cstl);
          cstl.lieges.forEach(leader => {
            if (leader.name === liege) {
              leader.vassals.push(name)
              console.log("leader", leader);
            }
          })
        }
      })
    }
  })

  saveJson(json)

}

module.exports = {
  getKingdoms,
  addKingdom,
  getCastles,
  addCastle,
  getLieges,
  addLiege,
  getVassals,
  addVassal
}
