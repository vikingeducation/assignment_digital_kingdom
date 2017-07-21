const fs = require("fs");

let getJSON = () => {
  let json = fs.readFileSync("./data/kingdoms/kingdoms.json");
  json = JSON.parse(json);
  return json;
};

let getLieges = (castleName, kingdom) => {
  let json = getJSON();

  return Object.keys(kingdom.castles[castleName]);
};

let getKingdoms = () => {
  // returns array of keys
  let kingdoms = getJSON();
  let kingdomNames = Object.keys(kingdoms);
  return kingdomNames;
};

let getKingdom = name => {
  let json = getJSON();
  let kingdom = json[name];
  return kingdom;
};

let getKingdomInput = input => {
  let kingdoms = getJSON();
  if (kingdoms[input]) {
    //if it exists do nothing
  } else {
    //if you want dynamic kings and queens add them here
    //else add it
    kingdoms[input] = {
      king: "Alexander",
      queen: "Methudaslak",
      castles: {}
    };
  }
  writeJSON(kingdoms);
};
/*
let addAnything = (type, input, kingdom ) => {
  //get existing datafile
  let kingdoms = getJSON();

  //kingdoms[kingdom]...walk down to the a;lsdkjf;alksdjf
  //figure out who you want to become


  if (kingdoms[input]) {
    //if it exists do nothing
  } else {
    //if you want dynamic kings and queens add them here
    //else add it
    kingdoms[input] = {
      king: "Alexander",
      queen: "Methudaslak",
      castles: {}
    };
  }
  writeJSON( kingdoms)
};*/

let writeJSON = json_obj => {
  //rewrite the kingdoms.json
  let j_string = JSON.stringify(kingdoms, null, 2);
  fs.writeFileSync("./data/kingdoms/kingdoms.json", j_string);
};

module.exports = {
  getKingdoms,
  getKingdom,
  getKingdomInput,
  getLieges
};

///thoughts on rewriting getKingdomInput to be reusable
/*
let data_prototype = {
  "kingdom": {
    "king": "New King on the Block",
    "queen": "Old Queen from somewhere",
    "castles": {
      "The Really Stoney Castle": {},
      "Castle Danger": {},
      "Tintegal": {
        "Bob": [
          "Tim",
          "Karl",
          "Danger-irksome"
        ],
        "?????": [
          "Karl2",
          ""
        ]
      }
    }
  }
}
*/
