const express = require("express");
const path = require("path");
const app = express();

const mysql = require("mysql");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname + "/views"));

app.set("view engine", "ejs");

app.use(express.static("public"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kiran7709",
  database: "coursefeedback",
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/feedbackForm", (req, res) => {
  res.render("feedbackForm");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/addData", (req, res) => {
  console.log(req.body);

  const data = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
    q6: req.body.q6,
    q7: req.body.q7,
    q8: req.body.q8,
    q9: req.body.q9,
    description: req.body.description
  };

  connection.connect((err) => {
    if (err) console.log(err);
    console.log("connected to db");

    const statement = `INSERT INTO feedbackform VALUES ("${data.name}","${data.address}","${data.email}","${data.phoneNo}","${data.q1}","${data.q2}","${data.q3}","${data.q4}","${data.q5}","${data.q6}","${data.q7}","${data.q8}","${data.q9}","${data.description}");`;
    connection.query(statement, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.redirect("/");
    });
  });
});



const PORT = 3333 || process.env.PORT;
app.listen(PORT, () => console.log("Listening on 3333"));
