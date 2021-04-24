const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kiran7709",
  database: "awamad",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log("Connected!");
  const statement =
    "CREATE TABLE Club (club_id INT, club_name VARCHAR(50), club_lead VARCHAR(50), club_count INT)";
  connection.query(statement, (err, result) => {
    if (err) throw err;
    console.log(" Club table created ");
  });
});
