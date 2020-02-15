//Requiring mysql
var mysql = require('mysql');
let connection;

//Configuring connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
     connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Y7'zA@5q",
      database: "burgers_db"
  });
}

//Connecting to database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Exporting
module.exports = connection;
