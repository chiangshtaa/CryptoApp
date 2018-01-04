var express = require('express');
var path = require('path');
var app = express();
var request = require('request');

// const axios = require('axios');



app.use(express.static(path.join(__dirname, '/../')));


const url = 'https://api.coinmarketcap.com/v1/ticker/';
const limit = '?limit=5';


app.get('/crypto', (req, res) => {
  request(url + limit, (err, response, body) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(response.body);
    }
  })
})

app.listen(3000, function() {
  console.log('App listening on port 3000');
});