//var data = require('./data');
var fs =require('fs');
var http = require('http');
var express = require('express');
var router = require('./router.js');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res)=>{
  var kingdoms = router.getKingdoms();
  res.send(kingdoms);
})

app.listen(3000, 'localhost', ()=>{
  console.log('app is listening');
})