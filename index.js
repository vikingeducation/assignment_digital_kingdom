'use strict';

const Express = require('express');
const app = Express();
const router = Express.Router();
const hb = require('express-handlebars');

const kingdoms = require('./routes/kingdoms');

const port = 3000;
const host = 'localhost';
const hbs = hb.create({
  partialsDir: 'views/',
  defaultLayout: 'main'
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', kingdoms);

app.listen(port, host, () =>
  console.log(`Now listening on http://${host}:${port}/`)
);
