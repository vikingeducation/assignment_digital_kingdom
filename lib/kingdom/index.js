const app = require('express')();
const expressHandlebars = require('express-handlebars');
const helperLoader = new require('load-helpers')();

const helpers = require('../../views/helpers');

const exphbs = expressHandlebars.create({
  helpers: helpers,
  partialsDir: 'views/partials',
  defaultLayout: 'index'
});

app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');
