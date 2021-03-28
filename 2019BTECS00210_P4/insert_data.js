const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Smit1234",
  database: "awamad",
});

const data = [
  {
    id: 1,
    name: "PACE",
    lead: "SMIT DESHMUKH",
    count: 3,
  },
  {
    id: 2,
    name: "ACM",
    lead: "SIDDHARTH HOKKE",
    count: 2,
  },
  {
    id: 3,
    name: "WLUG",
    lead: "KIRAN RAUT",
    count: 4,
  },
  {
    id: 4,
    name: "ACSES",
    lead: "SUYASH SAVAJI",
    count: 3,
  },
];

connection.connect((err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log("Connected!");
  data.map((record) => {
    const statement = `INSERT INTO Club VALUES(${record.id}, '${record.name}', '${record.lead}', ${record.count})`;
    connection.query(statement, (err, result) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log(`Record ${record.id} inserted`);
    });
  });
});
