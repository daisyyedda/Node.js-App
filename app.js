const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>'); // send a response
});

app.listen(3010); // cleaner style