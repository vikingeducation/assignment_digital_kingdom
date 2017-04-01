const express = require('express');
const kingdoms = require('./routes/kingdoms');
const castles = require('./routes/castles');
const lieges = require('./routes/lieges');
const vassals = require('./routes/vassals');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const hbs = expressHandlebars.create({
  defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', kingdoms);
app.use('/:kingdomName/', castles);
app.use('/:kingdomName/:castleName', lieges);
app.use('/:kingdomName/:castleName/:liegeName', vassals);

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || '3000';
app.listen(port);

// app.listen(3000, () => {
//   console.log('Site available on localhost:3000/kingdoms');
// });
