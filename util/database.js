const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://daisyyedda:Yc-20021116@cluster0.2mzvjvg.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(client => {
      console.log('Connected!');
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });  
};

module.exports = mongoConnect;

