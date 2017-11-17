const express = require('express')
const app = express();
const kingdomsmain = require('./routes/kingdomsmain');
const fs = require('fs');


app.use('/', kingdomsmain);




app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.listen(3000, () => {
console.log('hey')

})