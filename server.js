const express = require('express'),
      request = require('request');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use('/proxy', function(req, res) {
  request(req.query.url, (error, response, body) => {
    if (error) {
      return console.error(error);
    }
    res.json(body);
  });
});

app.get('/', function(req, res) {
  res.render('index', {
    SERVICE_URL1: process.env.SERVICE_URL1,
    SERVICE_URL2: process.env.SERVICE_URL2,
    API_ADDR: process.env.API_ADDR
  });
});

app.listen(5000, function () {
  console.log('App listening on port 5000...');
});
