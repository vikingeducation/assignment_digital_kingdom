var express = require("express");
var fs = require("fs");

let data = {
  getKingdoms: () => {
    let data = fs.readFileSync("./data/kingdoms.json", "utf8");
    let json = JSON.parse(data);
    return json;
  },
  getKingdom: id => {
    let data = fs.readFileSync("./data/kingdoms.json", "utf8");
    let json = JSON.parse(data);
    return json[id];
  },
  getCastles: () => {
    let data = fs.readFileSync("./data/castles.json", "utf8");
    let json = JSON.parse(data);
    return json;
  },
  getLieges: () => {
    let data = fs.readFileSync("./data/lieges.json", "utf8");
    let json = JSON.parse(data);
    return json;
  },
  getLiege: id => {
    let data = fs.readFileSync("./data/lieges.json", "utf8");
    let json = JSON.parse(data);
    return json[id];
  },
  getVassals: () => {
    let data = fs.readFileSync("./data/vassals.json", "utf8");
    let json = JSON.parse(data);
    return json;
  },
  getVassal: id => {
    let data = fs.readFileSync("./data/vassals.json", "utf8");
    let json = JSON.parse(data);
    return json[id];
  }
};
module.exports = data;
