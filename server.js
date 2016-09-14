const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', function(req, res) {
  res.render('index', {SERVICE_URL: process.env.SERVICE_URL});
});

app.listen(5000, function () {
  console.log('App listening on port 5000...');
});
