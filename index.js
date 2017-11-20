const express = require('express')
const exphbs  = require('express-handlebars')
const router = require('./routes/index.js');
const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.listen(3000, () => {});
