var mysql = require("mysql");

connection = mysql.createConnection({
  host: "70.32.28.69",
  user: "garde_root",
  password: "Bngv#899",
  database: "gardenhu_db"
});

connection.connect(function(error) {
  if (error) {
      console.log("error  " + erorr.stack);
      return;
  }
  
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
