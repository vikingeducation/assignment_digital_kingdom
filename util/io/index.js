const fs = require('fs');

module.exports = {
  write: data =>
    fs.writeFileSync('./data/realm.json', JSON.stringify(data, null, 2)),
  read: () => JSON.parse(fs.readFileSync('./data/realm.json'), 'utf8'),
  reset: () =>
    module.exports.write({
      Kingdom: {},
      Castle: {},
      Liege: {},
      Vassal: {}
    }),
  parent: childType => _parent[childType],
  child: parentType => _child[parentType],
  valid: entityType => Object.keys(_parent).includes(entityType)
};

const _parent = {
  Kingdom: 'Vassal',
  Castle: 'Kingdom',
  Liege: 'Castle',
  Vassal: 'Liege'
};
const _child = {
  Kingdom: 'Castle',
  Castle: 'Liege',
  Liege: 'Vassal',
  Vassal: 'Kingdom'
};
