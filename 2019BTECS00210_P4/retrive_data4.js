const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Smit1234",
  database: "awamad",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log("Connected!");
  const statement =
    "SELECT club_name, club_lead FROM Club WHERE club_count = 3";
  connection.query(statement, (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }
    const data = res;
    console.log("- - - - - - - - - - - - - - - - ");
    console.log("|  club Name  |  club Count |");
    console.log("- - - - - - - - - - - - - - - - ");
    data.map((row) => {
      console.log(`|  ${row.club_name}  |    ${row.club_lead}   |`);
      console.log("- - - - - - - - - - - - - - -");
    });
  });
});
