var express = require("express");
var fs = require("fs");


let kingdomData =fs.readFileSync("./data/kingdoms.json", "utf8");
let castleData  = fs.readFileSync("./data/castles.json", "utf8");
let liegeData = fs.readFileSync("./data/lieges.json", "utf8");
let vassalData = fs.readFileSync("./data/vassals.json", "utf8");
let data = {
  
  getKingdoms: () => {
    let json = JSON.parse(kingdomData);
    return json;
  },
  getKingdom: id => {
    let data = kingdomData;
    let json = JSON.parse(data);
    return json[id];
  },
  getCastles: () => {
    let data = castleData;
    let json = JSON.parse(data);
    return json;
  },
  getLieges: () => {
    let data = liegeData;
    let json = JSON.parse(data);
    return json;
  },
  getLiege: id => {
    let data = liegeData;
    let json = JSON.parse(data);
    return json[id];
  },
  getVassals: () => {
    let data = vassalData;
    let json = JSON.parse(data);
    return json;
  },
  getVassal: id => {
    let data = vassalData;
    let json = JSON.parse(data);
    return json[id];
  },

  addResource: (name, resource) =>{
    let resources={
      kingdom: kingdomData,
      castle: castleData,
      liege: liegeData,
      vassal: vassalData
    };
    let resourceData = resources[resource];
    resourceData = JSON.parse(resourceData);
    let keys = Object.keys(resourceData["1"]);
    newResource = {name: name};

    resourceData[]
    fs.writeFileSynce("./data/"+resource+"s.json", )

  }
};
module.exports = data;
