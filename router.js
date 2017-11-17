var express = require('express');
var fs = require('fs');

let data = {
  getKingdoms: ()=>{
    let data = fs.readFileSync('./data/kingdoms.json', 'utf8');
    let json = JSON.parse(data);
    return json;
  },
  getKings: ()=>{
    let data = fs.readFileSync('./data/kings.json', 'utf8');
    let json = JSON.parse(data);
    return json;
  }
}
module.exports = data;