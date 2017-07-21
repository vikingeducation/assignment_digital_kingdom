const read = require('../io').read;

function get_entity(type, id) {
  const realm = read();
  let current_entity = realm[type][id];
  current_entity.children = [];

  for (let entityType in realm) {
    if (realm[entityType].parentType === type) {
      for (let childEntity in realm[entityType]) {
        if (realm[entityType][childEntity].parentId === id) {
          current_entity.children.push(realm[entityType][childEntity]);
        }
      }
    }
  }
  return current_entity;
}

module.exports = get_entity;
