const mySql = require("mysql");

const connection = mySql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  database: "heroku_0fe83a2652926f0",
  user: "bcf879f4291a94",
  password: "e29d831d",
});

module.exports = connection;
