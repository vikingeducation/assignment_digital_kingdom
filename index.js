const express = require('express');
const fs = require('fs')
const bodyParser = require('body-parser')
const kingdoms = require('./routes/kingdoms')
const exphbs = require('express-handlebars');

const app = express()


const hbs = exphbs.create({
  defaultLayout: "main"
});

//console.log(hbs)
app.use(bodyParser.urlencoded({
  extended: true
}));

//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.use('/kingdoms', kingdoms);


app.listen(4250, () => {
  console.log('last firday night!')
})
