const express = require('express')
const app = express();
const kingdomsmain = require('./routes/kingdomsmain');
const castles = require('./routes/castles');
const fs = require('fs');
const exphbs  = require('express-handlebars')

app.use('/', kingdomsmain);
app.use('/castles', castles);



app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.listen(3000, () => {
console.log('hey')

})


