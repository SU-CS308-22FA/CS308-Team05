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

var db = mysql.createConnection({
  user: "freedb_school",
  host: "sql.freedb.tech",
  password: "?$5YdyC9D!myzX8",
  database: "freedb_CS308Project",
});

function handleDisconnect() {
  db = mysql.createConnection({
    user: "freedb_school",
    host: "sql.freedb.tech",
    password: "?$5YdyC9D!myzX8",
    database: "freedb_CS308Project",
  });

  db.connect(function(err) {
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  db.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      handleDisconnect();
    }
  });
}

handleDisconnect();

app.post("/signup", (req, res) => {
  const fullname = req.body.fullname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const active = 1;

  bcrypt.hash(password, SaltRounds, (err, hash) => {
    if (err){
      console.log(err);
    }

    db.query(
      "INSERT INTO Users (FullName, Username, Email, Password, Active) VALUES (?,?,?,?,?)",
      [fullname, username, email, hash, active],
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

app.post("/create", (req, res) => {
  const Club = req.body.Club;
  const Games = req.body.Games;
  const W = req.body.W;
  const D = req.body.D;
  const L = req.body.L;
  const Goals = req.body.Goals;
  const GD = req.body.GD;
  const Points = req.body.Points;
  

  db.query(
    "INSERT INTO Standings (Club, Games, W, D, L, Goals, GD, Points) VALUES (?,?,?,?,?,?,?,?)",
    [Club, Games, W, D, L, Goals, GD, Points],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get ('/standings', (req, res) => {
  db.query("SELECT * FROM Standings",(err,result) =>{
    if(err){
      console.log(err)
    }
    else{
      res.send(result)
    }
  })
 
});

app.get ('/contacts', (req, res) => {
  db.query("SELECT * FROM Contacts",(err,result) =>{
    if(err){
      console.log(err)
    }
    else{
      res.send(result)
    }
  })
 
});


app.post ("/login", (req, res) => {
  const identification = req.body.identification;
  const password = req.body.password;

  db.query(
    "SELECT * FROM Users WHERE Username = ? AND Active = TRUE;",
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
        res.send({message: "Username doesn't exist or your account has been suspended"});
      }
    }
  );
});


app.post("/sendquestion",(req,res) =>{
  const content = req.body.content;
  const senderName = req.body.senderName;
  const receiverAdmin = req.body.receiverAdmin;

  db.query(
    "INSERT INTO Questions (content,senderName,receiverAdmin) VALUES (?,?,?)",
    [content,senderName,receiverAdmin],
    (err,result) =>{
      if(err){
        console.log(err);
      }
      else{
        res.send("SUCCESS");
        
      }
    }
  )
})

app.get("/questions",(req,res) =>{
  db.query("SELECT * FROM Questions WHERE isResolved IS FALSE",(err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
})

app.get("/getcomments",(req,res) =>{
  db.query("SELECT * FROM Comments", (err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
})

app.get("/getroots",(req,res) =>{
  db.query("SELECT * FROM Comments WHERE parentId IS NULL",(err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
})

app.post("/sendanswer",(req,res) =>{
  const content = req.body.content;
  const userSent = req.body.userSent;
  const adminName = req.body.adminName;
  const idQuestions = req.body.idQuestions;

  db.query(
    "INSERT INTO Answers (adminName,userSent,content,idQuestions) VALUES (?,?,?,?)",
    [adminName,userSent,content,idQuestions],
    (err,result) =>{
      if(err){
        console.log(err);
      }
      else{
        
      }
    }
  )
})

app.get("/getreplies",(req,res) =>{
  db.query("SELECT * FROM Comments WHERE parentId = 1",(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
})

app.post("/updateresolved", (req, res) => {
  const idQuestions = req.body.idQuestions

  db.query(
    "UPDATE Questions SET isResolved = 1 WHERE idQuestions = ?;", 
    idQuestions,
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.get("/answers",(req,res) =>{
  const userSent = req.body.userSent;
  db.query("SELECT * FROM Answers",
    (err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
})

app.post("/updateusername", (req, res) => {
  const id = req.body.id;
  const username = req.body.username;

  db.query(
    "UPDATE Users SET UserName = ? WHERE FullName = ?;", 
    [username, id], 
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.post("/updateemail", (req, res) => {
  const id = req.body.id;
  const email = req.body.email;

  db.query(
    "UPDATE Users SET Email = ? WHERE FullName = ?;", 
    [email, id], 
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.post("/updatepassword", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  bcrypt.hash(password, SaltRounds, (err, hash) => {
    if (err){
      console.log(err);
    }

    db.query(
      "UPDATE Users SET Password = ? WHERE FullName = ?;", 
      [hash, id], 
      (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
  })
});

app.post("/deleteuser", (req, res) => {
  const id = req.body.id;

  db.query(
    "DELETE FROM Users WHERE FullName = ?", 
    id,
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("running server");
});

app.post ("/clublogin", (req, res) => {
  const identification = req.body.identification;
  const password = req.body.password;

  db.query(
    "SELECT * FROM FootballClubs WHERE Name = ? AND Active = TRUE;",
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
            res.send({message: "Wrong name/password combination"});
          }
        });
      } else {
        res.send({message: "Football club doesn't exist or the profile isn't active!"});
      }
    }
  );
});

app.post("/clubupdatepassword", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  bcrypt.hash(password, SaltRounds, (err, hash) => {
    if (err){
      console.log(err);
    }

    db.query(
      "UPDATE FootballClubs SET Password = ? WHERE Name = ?;", 
      [hash, id], 
      (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
  })
});

app.post ("/adminlogin", (req, res) => {
  const identification = req.body.identification;
  const password = req.body.password;

  db.query(
    "SELECT * FROM Admins WHERE Username = ?",
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
            res.send({message: "Wrong name/password combination"});
          }
        });
      } else {
        res.send({message: "Username doesn't exist"});
      }
    }
  );
});

app.post("/adminupdatepassword", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  bcrypt.hash(password, SaltRounds, (err, hash) => {
    if (err){
      console.log(err);
    }

    db.query(
      "UPDATE Admins SET Password = ? WHERE Username = ?;", 
      [hash, id], 
      (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
  })
});

app.post("/addclub", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const active = req.body.active;

  bcrypt.hash(password, SaltRounds, (err, hash) => {
    if (err){
      console.log(err);
    }

    db.query(
      "INSERT INTO FootballClubs (Name, Active, Password) VALUES (?,?,?)",
      [name, active, hash],
      (err, result) => {
        console.log(err);
      }
    );
  })
});

app.get ("/getclubs", (req, res) => {
  db.query(
    "SELECT Name FROM FootballClubs WHERE Name IS NOT NULL",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post("/deleteclub", (req, res) => {
  const name = req.body.name;

  db.query(
    "DELETE FROM FootballClubs WHERE Name = ?", 
    name,
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.get ("/getinactiveclubs", (req, res) => {
  db.query(
    "SELECT Name FROM FootballClubs WHERE Active IS FALSE",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post("/activateclub", (req, res) => {
  const name = req.body.name;

  db.query(
    "UPDATE FootballClubs SET Active = true WHERE Name = ?;", 
    name,
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.get ("/getactiveclubs", (req, res) => {
  db.query(
    "SELECT Name FROM FootballClubs WHERE Active IS TRUE",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post("/deactivateclub", (req, res) => {
  const name = req.body.name;

  db.query(
    "UPDATE FootballClubs SET Active = false WHERE Name = ?;", 
    name,
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.get ("/getinactiveusers", (req, res) => {
  db.query(
    "SELECT Username FROM Users WHERE Active IS FALSE",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post("/activateuser", (req, res) => {
  const name = req.body.name;

  db.query(
    "UPDATE Users SET Active = true WHERE Username = ?;", 
    name,
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.get ("/getactiveusers", (req, res) => {
  db.query(
    "SELECT Username FROM Users WHERE Active IS TRUE",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.get('/PLAYERS', (req, res) => {
  db.query("SELECT * FROM PLAYERS", (err, result) => {
    if (err) {
      console.log(err)
    } else{
      res.send(result)
    }
  })
})

app.get('/fixtures', (req, res) => {
  db.query("SELECT * FROM Fixtures WHERE week_of_match = 1", (err, result) => {
    if (err) {
      console.log(err)
    } else{
      res.send(result)
    }
  })
})

app.get('/fixtures_w2', (req, res) => {
  db.query("SELECT * FROM Fixtures WHERE week_of_match = 2", (err, result) => {
    if (err) {
      console.log(err)
    } else{
      res.send(result)
    }
  })
})

app.get('/fixtures_w3', (req, res) => {
  db.query("SELECT * FROM Fixtures WHERE week_of_match = 3", (err, result) => {
    if (err) {
      console.log(err)
    } else{
      res.send(result)
    }
  })
})

app.get('/fixtures_w4', (req, res) => {
  db.query("SELECT * FROM Fixtures WHERE week_of_match = 4", (err, result) => {
    if (err) {
      console.log(err)
    } else{
      res.send(result)
    }
  })
})

app.get('/fixtures_w5', (req, res) => {
  db.query("SELECT * FROM Fixtures WHERE week_of_match = 5", (err, result) => {
    if (err) {
      console.log(err)
    } else{
      res.send(result)
    }
  })
})

app.get('/fixtures_w6', (req, res) => {
  db.query("SELECT * FROM Fixtures WHERE week_of_match = 6", (err, result) => {
    if (err) {
      console.log(err)
    } else{
      res.send(result)
    }
  })
})

app.post ("/clubvotepage", (req, res) => {
  const t = req.body.team;
  let matches = "SELECT * FROM Fixtures WHERE home_team = '" + t + "' OR alien_team = '" + t + "'";

  db.query(matches,  (err, result) => {

      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.get('/PLAYERPAGE', (req, res) => {
  db.query("SELECT * FROM AlanyasporKayserispor WHERE Player IS NOT NULL", (err, result) => {
    if (err) {
      console.log(err)
    } else{
      res.send(result)
    }
  }) 
})

app.get('/PLAYERPAGE_v2', (req, res) => {
  db.query("SELECT * FROM FatihKarag??mr??kTrabzonspor WHERE Player IS NOT NULL", (err, result) => {
    if (err) {
      console.log(err)
    } else{
      res.send(result)
    }
  })
})

app.post("/deactivateuser", (req, res) => {
  const name = req.body.name;

  db.query(
    "UPDATE Users SET Active = false WHERE Username = ?;", 
    name,
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.get ("/getactivematches", (req, res) => {
  db.query(
    "SELECT * FROM MatchScores WHERE RateAvailable IS TRUE",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.get ("/getinactivematches", (req, res) => {
  db.query(
    "SELECT * FROM MatchScores WHERE RateAvailable IS FALSE",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post ("/displayplayers", (req, res) => {
  const server = req.body.server;
  let table = "SELECT PlayerName FROM "+ server +" WHERE PlayerName IS NOT NULL";

  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post ("/dtvp", (req, res) => {
  const server = req.body.server;
  let table = "SELECT * FROM "+ server +" WHERE PlayerName IS NOT NULL";

  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post ("/dtvppp", (req, res) => {
  const server = req.body.server;
  let table = "SELECT * FROM "+ server +" WHERE PlayerName IS NOT NULL";

  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post ("/dsp", (req, res) => {
  const server = req.body.server;
  let table = "SELECT * FROM "+ server +" WHERE PlayerName IS NOT NULL";

  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post ("/savevote", (req, res) => {
  const server = req.body.server;
  const id = req.body.id;
  const score = req.body.score;

  let table = "UPDATE "+ server +" SET Vote = Vote + "+score+" WHERE idPlayer = "+id;

  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post("/activatematch", (req, res) => {
  const ht = req.body.ht;
  const at = req.body.at;
  db.query(
    "UPDATE MatchScores SET RateAvailable = true WHERE (HomeTeam = ? AND AwayTeam = ?);", 
    [ht, at],
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.post("/deactivatematch", (req, res) => {
  const ht = req.body.ht;
  const at = req.body.at;
  db.query(
    "UPDATE MatchScores SET RateAvailable = false WHERE (HomeTeam = ? AND AwayTeam = ?);", 
    [ht, at],
    (err, result) => {
    if (err) {
      console.log(err);
      res.send({message: "An error occured"});
    } else {
      res.send(result);
    }
  });
});

app.post ("/useravailable", (req, res) => {
  const server = req.body.server;
  let table = "SELECT VotedUser FROM "+ server +" WHERE VotedUser IS NOT NULL";
  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post ("/getvotes", (req, res) => {
  const server = req.body.server;
  let table = "SELECT Vote FROM "+ server +" WHERE Vote IS NOT NULL";
  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post ("/adduserrating", (req, res) => {
  const server = req.body.server;
  const username = req.body.username;
  let table = "INSERT INTO "+server+" (VotedUser) VALUES ('"+username+"');";
  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post ("/savemotm", (req, res) => {
  const server = req.body.server;
  const playername = req.body.playername;
  let table = "UPDATE "+ server +" SET Motm = Motm + 1 WHERE PlayerName = '"+playername+"';";
  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});

app.post ("/getmotm", (req, res) => {
  const server = req.body.server;
  let table = "SELECT PlayerName, Motm FROM "+server+" WHERE Motm = (SELECT MAX(Motm) FROM "+server+");";
  db.query(
    table,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({message: "An error occured"});
      } else {
        res.send(result);
      }
    });
});