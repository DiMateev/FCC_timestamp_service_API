// server.js
// where your node app starts

// init project
const express = require('express');
var app = express();

const time = require('./time');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:input", (req, res) => {
  var input = req.params.input;
  var result = time.timeConvert(input);
  res.end(JSON.stringify(result));
});

app.listen(process.env.port || 3000);