const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const kingdoms = require('./routes/kingdoms.js');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/kingdoms', kingdoms);




app.listen(3000, () => {
  console.log('Listening on port 3000');
});
