var CastlesHelper = {};

// -------- Paths --------- //
CastlesHelper.castlePath = (name) => `/castles/${ name }`;
CastlesHelper.newCastlePath = () => '/castles/new';


// -------- View Helpers --------- //
CastlesHelper.anyLeiges = (castle) => {
  return Object.keys(castle.leiges).length !== 0;
};

CastlesHelper.liegeAmount = (castle) => {
  return Object.keys(castle.leiges).length;
};

module.exports = CastlesHelper;
