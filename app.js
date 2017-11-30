const express = require('express');
const exphbs  = require('express-handlebars');
const router = require('./routes/kingdoms');

const app = express();

// const hbs = expressHbs.create({mainLayout: 'main'});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public/css'));

app.use("/kingdoms", router);


app.listen(3000, () => {
  console.log("It's just keep rolling now");
});
