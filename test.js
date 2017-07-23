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
          let vassalId = put('vassal', `Vassal ${v}`, liegeId);

          for (let k2 = 0; k2 < 2; k2++) {
            put('kingdom', `Imaginary Kingdom ${k2}`, vassalId);
          }
        }
      }
    }
  }
}

if (process.argv[2] === 'run') {
  // do stuff
}
