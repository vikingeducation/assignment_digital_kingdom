
// const getKingdoms = () => {
//   const json = getJson();
//   const kingdoms = Object.keys(json.Kingdoms);
//   return kingdoms;
// };
//
// const getKings = () => {
//   const json = getJson();
//   const allKingdoms = getKingdoms();
//   var kings = [];
//   for (var i = 0; i < allKingdoms.length; i++) {
//     if (json.Kingdoms[allKingdoms[i]].King){
//       kings[i] = json.Kingdoms[allKingdoms[i]].King;
//     }
//     else {
//       kings[i] = "None";
//     }
//   }
//   kings = [].concat.apply([], kings);
//   return kings;
// }
//
// const getQueens = () => {
//   const json = getJson();
//   const allKingdoms = getKingdoms();
//   var queens = [];
//   for (var i = 0; i < allKingdoms.length; i++) {
//     if (json.Kingdoms[allKingdoms[i]].Queen){
//       queens[i] = json.Kingdoms[allKingdoms[i]].Queen;
//     }
//     else {
//       queens[i] = "None";
//     }
//   }
//   queens = [].concat.apply([], queens);
//   return queens;
// }

const fs = require("fs");

const getJson = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

const addKingdom = (kingdomName, kingName, queenName) => {
  const json = getJson();
  for (var i = 0; i < json.length; i++) {
    if (json[i].Kingdom === kingdomName) return;
  }

  json[json.length] = {"id": json.length.toString(), "Kingdom": kingdomName, "King": kingName, "Queen": queenName, "Castles": [{"Lieges": [{"Vassals":[{}]
  }]}]};
  saveJson(json);
};

const addCastle = (castleName, kingdomId) => {
  const json = getJson();
  var castles = json[kingdomId].Castles;

  if (castles[0].id){
    castles[castles.length] = {
      "id": castles.length.toString(),
      "name": castleName
    }
  }
  else {
    castles[0] = {
      "id": "0",
      "name": castleName,
      "Lieges": castles[0].Lieges
    }
  }
  saveJson(json);
}

const addLiege = (liegeName, kingdomId, castleId) => {
  const json = getJson();
  var lieges = json[kingdomId].Castles[castleId].Lieges;

  if (lieges[0].id){
    lieges[lieges.length] = {
      "id": lieges.length.toString(),
      "name": liegeName
    }
  }
  else {
    lieges[0] = {
      "id": "0",
      "name": liegeName,
      "Vassals": lieges[0].Vassals
    }
  }
  saveJson(json);
}

const addVassal = (vassalName, kingdomId, castleId, liegeId) => {
  const json = getJson();
  var vassals = json[kingdomId].Castles[castleId].Lieges[liegeId].Vassals;
  if (vassals[0].id){
    vassals[vassals.length] = {
      "id": vassals.length.toString(),
      "name": vassalName
    }
  }
  else {
    vassals[0] = {
      "id": "0",
      "name": vassalName
    }
  }
  saveJson(json);
}


const saveJson = (json) => {
  fs.writeFileSync("kingdoms.json", JSON.stringify(json, null, 1));
};

module.exports = {
  addKingdom, getJson, addCastle, addLiege, addVassal
};
