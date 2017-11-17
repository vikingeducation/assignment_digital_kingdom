// APP

const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

const hbs = expressHandlebars.create({
  defaultLayout: 'index',
  helpers: helpers.registered,
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.end('Digital kingdom');
});

app.listen(3000, () => {
  console.log('server started');
});
