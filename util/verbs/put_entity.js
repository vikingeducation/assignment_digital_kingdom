const { read, write } = require('../io');
const parentMap = {
  kingdoms: 'vassals',
  castles: 'kingdoms',
  kings: 'kingdoms',
  queens: 'kingdoms',
  lieges: 'castles',
  vassals: 'lieges'
};

module.exports = (data, id) => {
  // type
  // parentId
  // name
  // Read json file.

  let realm = read();

  if (data.type.slice(-1) !== 's') data.type += 's';
  let parentType = parentMap[data.type];
  // Generate new ID.
  const newID = !isNaN(+id) ? id : _getNewId(realm, data.type);
  // Create empty entity object.
  let newEntity = {
    parentId: data.parentId,
    name: data.name,
    children: {}
  };

  // Add to parent's child object
  if (!isNaN(+data.parentId)) {
    let parentChildren = realm[parentType][data.parentId].children;
    if (!parentChildren[data.type]) {
      parentChildren[data.type] = [];
    }
    parentChildren[data.type].push(newID);
  }

  // Insert object into realm, LAB.
  realm[data.type][newID] = newEntity;

  // Write the new realm to the file.
  write(realm);
  return newID;
};

function _getNewId(realm, type) {
  let keys = Object.keys(realm[type]);
  keys = keys.filter(el => !isNaN(+el)).map(el => +el);
  if (!keys.length) return 0;
  return Math.max(...keys) + 1;
}
