const express = require('express');
const path = require('path');
const parser = require('body-parser');
const routes = require('./routes.js')

const port = 3000;
const app = express();


app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, "../static")));

app.use('/api', routes)

app.listen(port, () => { 
  console.log(`example app now listening on port ${port}`)
})



