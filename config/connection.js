var mysql = require("mysql");

connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(error) {
  if (error) {
      console.error("error  " + erorr.stack);
      return;
  }
  
  console.log("connected as id " + connection.threadId);
});