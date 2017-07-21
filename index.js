const express = require('express');
const app = express()
app.set('view engine', 'hbs');

const port = process.env.PORT || '3000';

app.use((req, res, next) => {
  console.log(req.url + " - " + new Date());
  next();
});



app.listen(port);