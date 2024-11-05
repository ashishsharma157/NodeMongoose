const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://superuser:Admin123@shopcluster.7bnb8.mongodb.net/?retryWrites=true&w=majority&appName=ShopCluster"
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback();
    })

    .catch((err) => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database connected";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
