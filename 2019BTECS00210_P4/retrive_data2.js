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
  const statement = "SELECT * FROM club WHERE club_name = 'PACE'";
  connection.query(statement, (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }
    const data = res;
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
    console.log("| club ID | club Name | club Lead | club Count |");
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
    data.map((row) => {
      console.log(
        `|   ${row.club_id}    |   ${row.club_name}   | ${row.club_lead} |   ${row.club_count}   |`
      );
      console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
    });
  });
});
