let { del, post, get } = require('./util/verbs');

if (process.argv[2] === 'reset') require('./util/io').reset();

if (process.argv[2] === 'build') {
  for (let k = 0; k < 5; k++) {
    let king = post('Kingdom', `Kingdom ${k}`);

    for (let c = 0; c < 5; c++) {
      let castle = post('Castle', `Castle ${c}`, king.id);

      for (let l = 0; l < 5; l++) {
        let liege = post('Liege', `Liege ${l}`, castle.id);

        for (let v = 0; v < 5; v++) {
          let vassal = post('Vassal', `Vassal ${v}`, liege.id);

          for (let k2 = 0; k2 < 0; k2++) {
            post('Kingdom', `Imaginary Kingdom ${k2}`, vassal.id);
          }
        }
      }
    }
  }
}

if (process.argv[2] === 'run') {
  // do stuff
  console.log(post('Liege', 'your mom', 0));
}
