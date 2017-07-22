let { del, put, get } = require('./util/verbs');

if (process.argv[2] === 'reset') require('./util/io').reset();

if (process.argv[2] === 'build') {
  let kingId = put('kingdom', 'bananarama');

  put('king', 'bob', kingId);
  put('queen', 'sue', kingId);

  for (let c = 0; c < 10; c++) {
    let castleId = put('castle', `Castle ${c}`, kingId);

    for (let l = 0; l < 10; l++) {
      let liegeId = put('liege', `Liege ${l}`, castleId);

      for (let v = 0; v < 10; v++) {
        put('vassal', `Vassal ${v}`, liegeId);
      }
    }
  }
}
