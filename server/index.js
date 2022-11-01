const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "CS308",
});

app.post("/signup", (req, res) => {
  const fullname = req.body.fullname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO Users (FullName, Username, Email, Password) VALUES (?,?,?,?)",
    [fullname, username, email, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const identification = req.body.identification;
  const password = req.body.password;

  db.query(
    "SELECT * FROM Users WHERE Username = ? AND Password = ?;",
    [identification, password],
    (err, result) => {
      if (err){
        res.send({err: err});
      }
      if (result.length > 0){
        res.send(result);
      } else {
        res.send({message: "Wrong username/password combination"});
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
