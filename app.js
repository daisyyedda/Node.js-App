const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extneded: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3010);
