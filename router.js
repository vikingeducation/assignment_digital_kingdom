var express = require("express");
var fs = require("fs");

let kingdomData = fs.readFileSync("./data/kingdoms.json", "utf8");
let castleData = fs.readFileSync("./data/castles.json", "utf8");
let liegeData = fs.readFileSync("./data/lieges.json", "utf8");
let vassalData = fs.readFileSync("./data/vassals.json", "utf8");
let resourceKeys = {
  kingdoms: ["id", "name", "queenId", "kingId", "castleIds"],
  kings: ["id", "name"],
  queens: ["id", "name"],
  castles: ["id", "name", "liegeIds"],
  lieges: ["id", "name", "vassalIds"],
  vassals: ["id", "name"]
};
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

  addResource: (name, resource, ownerId, ownerType) => {
    let resources = {
      kingdoms: kingdomData,
      castles: castleData,
      lieges: liegeData,
      vassals: vassalData
    };
    let resourceData = resources[resource];
    console.log("resourceData is " + resourceData);
    resourceData = JSON.parse(resourceData);
    let keys = resourceKeys[resource];
    newResource = {};
    keys.forEach(key => {
      if (key.charAt(key.length - 1) == "s") {
        newResource[key] = [];
      } else {
        newResource[key] = undefined;
      }
    });
    newResource.name = name;
    let idArray = Object.keys(resourceData);
    let lastId = idArray[idArray.length - 1];
    lastId = Number(lastId);
    let newId = lastId + 1;
    newResource.id = newId.toString();
    resourceData[newResource.id] = newResource;
    resourceData = JSON.stringify(resourceData, null, "  ");
    fs.writeFileSync("./data/" + resource + ".json", resourceData);

    //Connect to owner
    if (ownerId) {
      let ownerData = JSON.parse(resources[ownerType])
      let owner = ownerData[ownerId];
      let resourceType = resource;
      resourceType = resourceType.slice(0, resourceType.length-1);
      resourceType += "Ids";
      console.log("resourceType is "+resourceType);
      console.log("owner is "+owner)
      console.log("owner[resourceType] is "+owner[resourceType])
      owner[resourceType].push(Number(newResource.id));
      let modifiedOwnerType = JSON.stringify(ownerData, null, "  ");
      fs.writeFileSync("./data/" + ownerType + ".json", modifiedOwnerType);
    }
  }
};
module.exports = data;
