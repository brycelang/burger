var mysql = require("mysql");

connection = mysql.createConnection({
  host: " gardenhub.a2hosted.com",
  user: "garde_root",
  password: "Bngv#899",
  database: "burgers_db"
});

connection.connect(function(error) {
  if (error) {
      console.log("error  " + erorr.stack);
      return;
  }
  
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
