const { MongoClient } = require("mongodb");
// Connection URL
const url = 'mongodb://localhost:27017/test';

const connectClient = (cb) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true,
  }).then(client => {
    return cb(null, client);
  }).catch( err => {
    return cb(err, null);
  });
}

module.exports = connectClient;