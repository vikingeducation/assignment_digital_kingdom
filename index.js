'use strict';

const Express = require('express');
const app = Express();
const router = Express.Router();
const hb = require('express-handlebars');

const kingdoms = require('./routes/kingdoms');

const port = 3000;
const host = 'localhost';

app.use('/', kingdoms);

app.listen(port, host, () =>
  console.log(`Now listening on http://${host}:${port}/`)
);
