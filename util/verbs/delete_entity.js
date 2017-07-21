const { read, write } = require('../io');
module.exports = (type, id) => {
  let realm = read();
  let entity = realm[type][id];
  if (!entity) return false;

  let parentId = entity.parentId;
  // Remove entity
  realm[type][id] = undefined;
  // Remove entity from parent's child object
  if (!isNaN(+parentId)) {
    childArray = realm[realm[type].parentType][parentId].children[type];
    childArray = childArray.splice(childArray.indexOf(id), 1);
  }

  write(realm);
  return true;
};
