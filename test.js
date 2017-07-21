let { del, put, get } = require('./util/verbs');

let kingId = put({
  type: 'kingdom',
  name: 'bananarama'
});

put({
  type: 'king',
  name: 'bob',
  parentId: kingId
});

put({
  type: 'queen',
  name: 'sue',
  parentId: kingId
});

for (let i = 0; i < 6; i++) {
  let castleId = put({
    type: 'castle',
    name: `Castle ${i}`,
    parentId: kingId
  });
}
