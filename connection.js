const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
  host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "b3koqx8p2xxaaow0",
  password: "azn53rfw0nja56kc",
  database: "ya7jghaj3co2sukf"
});
};
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
