const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// registers a middleware
app.use(bodyParser.urlencoded({extneded: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>'); // send a response
});

app.listen(3010); // cleaner style
