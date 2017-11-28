const express = require('express');
const fs = require('fs');
const kingdoms = require('./routes/kingdoms')
const app = express();

app.use('/kingdoms', kingdoms);


app.listen(3000, () => {
  console.log("It's just keeps rolloing now");
})
