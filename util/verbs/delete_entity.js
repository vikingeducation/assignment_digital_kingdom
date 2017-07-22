const parentMap = require('../io/parent_map');
const { read, write } = require('../io');
module.exports = (type, id) => {
  let realm = read();
  let entity = realm[type][id];
  if (!entity) return false;

  // Grok the parent
  let parentType = parentMap[type];
  let parentId = entity.parentId;
  // Remove entity
  realm[type][id] = null;
  // Remove entity from parent's child object
  if (!isNaN(+parentId)) {
    childArray = realm[parentType][parentId].children[type];
    childArray = childArray.splice(childArray.indexOf(id), 1);
  }

  write(realm);
  return true;
};
