const fs = require('fs');
const {
  _getJSON,
  _getArrayOfNames,
  _getObjectByName
} = require('./helpers');

const {
  getKingdoms,
  getKingdomInfo,
  getKingdomCastles,
  getCastleInfo,
  getLiegeInfo
} = require('../services/getter_services');



