const io = require('../io');

// If id is specified, we will overwrite!
module.exports = entity => {
  // Load the database
  let realm = io.read();
  realm[entity.type][entity.id] = entity;
  io.write(realm);
};
