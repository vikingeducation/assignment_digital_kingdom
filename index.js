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

app.use('/kingdoms', kingdoms);
app.use('/kingdoms/', castles);
app.use('/kingdoms/', lieges);
app.use('/kingdoms/', vassals);
// app.use('/castles', castles);
// app.use('/lieges', lieges);

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Site available on localhost:3000/kingdoms');
});
