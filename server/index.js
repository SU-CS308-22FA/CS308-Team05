const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const session = require("express-session");
require("dotenv").config();


const SaltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(cookieparser());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(session({
  key: "userId",
  secret: "CS308Project",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
}));

const db = mysql.createConnection({
  user: "rCufPgLcUG",
  host: "remotemysql.com",
  password: "TXThb2LUsl",
  database: "rCufPgLcUG",
});

app.post("/signup", (req, res) => {
  const fullname = req.body.fullname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, SaltRounds, (err, hash) => {
    if (err){
      console.log(err);
    }

    db.query(
      "INSERT INTO Users (FullName, Username, Email, Password) VALUES (?,?,?,?)",
      [fullname, username, email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  })
});

app.get ("/login", (req, res) => {
  if (req.session.user){
    res.send({loggedIn: true, user: req.session.user});
  } else{
    res.send({loggedIn: false});
  }
});

app.post ("/login", (req, res) => {
  const identification = req.body.identification;
  const password = req.body.password;

  db.query(
    "SELECT * FROM Users WHERE Username = ?;",
    identification,
    (err, result) => {
      if (err){
        res.send({err: err});
      }
      if (result.length > 0){
        bcrypt.compare(password, result[0].Password, (error, response) => {
          if (response){
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({message: "Wrong username/password combination"});
          }
        });
      } else {
        res.send({message: "Username doesn't exist"});
      }
    }
  );
});

app.post ("/settings", (req, res) => {
  const identification = req.body.identification;
  const oldvariable = req.body.oldvariable;
  const newvariable = req.body.newvariable;
  const index = req.body.index;

  if (index == 1){
    db.query(
      "SELECT * FROM Users WHERE FullName = ?;",
      identification,
      (err, result) => {
        if (err){
          res.send({err: err});
        }
        if (result.length > 0){
          if (oldvariable == result[0].UserName){
            db.query(
              "UPDATE Users SET UserName = ? WHERE FullName = ?;"
              [newvariable, identification]
            );
          } else {
            res.send({message: "Wrong full name/email combination"});
          }
        } else {
          res.send({message: "Full name doesn't exist"});
        }
      }
    );
  }

  if (index == 2){
    db.query(
      "SELECT * FROM Users WHERE FullName = ?;",
      identification,
      (err, result) => {
        if (err){
          res.send({err: err});
        }
        if (result.length > 0){
          if (oldvariable == result[0].Email){
            db.query(
              "UPDATE Users SET Email = ? WHERE FullName = ?;"
              [newvariable, identification]
            );
          } else {
            res.send({message: "Wrong full name/email combination"});
          }
        } else {
          res.send({message: "Full name doesn't exist"});
        }
      }
    );
  }

  if (index == 3){
    bcrypt.hash(newvariable, SaltRounds, (err, hash) => {
      if (err){
        console.log(err);
      }

      db.query(
        "SELECT * FROM Users WHERE FullName = ?;",
        identification,
        (err, result) => {
          if (err){
            res.send({err: err});
          }
          if (result.length > 0){
            bcrypt.compare(oldvariable, result[0].Password, (error, response) => {
              if (response){
                db.query(
                  "UPDATE Users SET Password = ? WHERE FullName = ?;"
                  [hash, identification]
                );
              } else {
                res.send({message: "Wrong full name/password combination"});
              }
            });
          } else {
            res.send({message: "Full name doesn't exist"});
          }
        }
      );
    })
  }

  res.send({message: "Error"});
});

app.listen(process.env.PORT || 3001, () => {
  console.log("running server");
});
