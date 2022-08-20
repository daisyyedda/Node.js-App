const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Yc-20021116', {
  dialect: 'mysql', 
  host: 'localhost'
});

module.exports = sequelize;
