let { del, put, get } = require('./util/verbs');

if (process.argv[2] === 'reset') require('./util/io').reset();

if (process.argv[2] === 'build') {
  for (let k = 0; k < 2; k++) {
    let kingId = put('kingdom', 'bananarama');

    for (let c = 0; c < 2; c++) {
      let castleId = put('castle', `Castle ${c}`, kingId);

      for (let l = 0; l < 10; l++) {
        let liegeId = put('liege', `Liege ${l}`, castleId);

        for (let v = 0; v < 10; v++) {
          put('vassal', `Vassal ${v}`, liegeId);
        }
      }
    }
  }
}

del('kingdom', 0);
