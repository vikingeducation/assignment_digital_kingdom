const express = require('express');
const exphbs  = require('express-handlebars');
const router = require('./routes/kingdoms');
const Handlebars = require('handlebars');
const bodyParser = require('body-parser');
const helpers = require('./helpers');

const hbs = exphbs.create({
  helpers: helpers,
  partialsDir: 'views/partials',
  defaultLayout: 'main'
});

const app = express();

Handlebars.registerHelper('convertIdsToNames', function(json, id, name) {
  if ( id == 0 ) return;
  if ( json[id][name] == 0) {
    return 0
  };
  return json[id][name];
});

Handlebars.registerHelper('getLengthArray', function(json, id, name) {
  if ( id == 0 ) return;
  if ( json[id][name] == 0) {
    return 0
  };
  return json[id][name].length;
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }) );
app.use(express.static(`${__dirname}/public`));
app.use("/", router);


app.listen(3000, () => {
  console.log("It's just keep rolling now");
});
