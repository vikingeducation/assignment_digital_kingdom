var CastlesHelper = {};

CastlesHelper.castlesPath = () => '/castles/';
CastlesHelper.castlePath = (id) => `/castles/${ id }`;
CastlesHelper.newCastlePath = () => '/castles/new';
CastlesHelper.editCastlePath = (id) => `/castles/${ id }/edit`;
CastlesHelper.destroyCastlePath = (id) => `/castles/${ id }/?_method=delete`;

module.exports = CastlesHelper;
