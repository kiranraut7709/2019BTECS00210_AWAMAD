const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kiran7709",
});
connection.connect((err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  connection.query("CREATE DATABASE AWAMAD2", (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log("AWAMAD Database created successfully");
  });
});
