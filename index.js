const express = require('express');
const colors = require('colors');
const kingdoms = require('./kingdoms/kingdomRoutes');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});
app.use('/kingdoms', kingdoms);

app.listen(3000, () => {
  console.log('Here we go!'.blue);
});