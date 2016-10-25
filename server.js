const express = require('express'),
      request = require('request');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use('/proxy', function(req, res) {
  request(req.query.url, function(error, response, body) {
    if (error) {
      return console.error(error);
    }
    res.json(body);
  });
});

app.get('/', function(req, res) {
  request('http://'+ process.env.SERVICE_URL +':' + process.env.SERVICE_PORT + '/motorcycle/find-by-type?type=Sport%20touring', function (error, response, body) {
    if (error) {
      return console.error(error);
    }

    res.render('index', {motorcycles: JSON.parse(body)});
  });
});

app.use(function(req, res) {
  res.status(404).send('Page not found');
});

app.listen(5000, function () {
  console.log('App listening on port 5000...');
});
