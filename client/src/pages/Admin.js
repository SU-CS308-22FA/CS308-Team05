import React, {useState} from "react"
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import Popup  from "./Popup";

export const Admin = (props) => {
  const [pass, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [addclubstatus, setAddclubstatus] = useState("");
  const [deleteclubstatus, setDeleteclubstatus] = useState("");
  const [activateclubstatus, setActivateclubstatus] = useState("");
  const [deactivateclubstatus, setDeactivateclubstatus] = useState("");
  const [activateuserstatus, setActivateuserstatus] = useState("");
  const [deactivateuserstatus, setDeactivateuserstatus] = useState("");
  const [activatematchstatus, setActivatematchstatus] = useState("");
  const [deactivatematchstatus, setDeactivatematchstatus] = useState("");

  const [addclubpopup, setAddclubpopup] = useState(false);
  const [deleteclubpopup, setDeleteclubpopup] = useState(false);
  const [activateclubpopup, setActivateclubpopup] = useState(false);
  const [deactivateclubpopup, setDeactivateclubpopup] = useState(false);
  const [activateuserpopup, setActivateuserpopup] = useState(false);
  const [deactivateuserpopup, setDeactivateuserpopup] = useState(false);
  const [activatematchpopup, setActivatematchpopup] = useState(false);
  const [deactivatematchpopup, setDeactivatematchpopup] = useState(false);

  const [clubpass, setClubpassword] = useState("");
  const [clubname, setClubname] = useState("");
  const [username, setUsername] = useState("");
  const [match, setMatch] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(status);
  }

  const updatepassword = () => {
    Axios.post("http://localhost:3001/adminupdatepassword", {
        id: global.fullname,  
        password: pass,
    }).then((response)=> {
        if (response.data.message){
            setStatus(response.data.message);
        } else {
            setStatus(response.data[0].Name);
            global.fullname = response.data[0].Username;
        }
    });
  };

  const addclub = () => {
    if (clubname !== "" && clubpass !== "") {
        Axios.post("http://localhost:3001/addclub", {
            name: clubname, 
            password: clubpass, 
            active: "false"
        }).then((response)=> {
            console.log(response);
            setAddclubstatus("Registered");
        });
        setAddclubstatus("Registered");
    } else {
        setAddclubstatus("Missing Required Parameter(s)");
    }
  };  

  const deleteclub = () => {
    Axios.post("http://localhost:3001/deleteclub", {
        name: clubname,  
    }).then((response)=> {
        if (response.data.message){
            setDeleteclubstatus(response.data.message);
        } else {
            setDeleteclubstatus("Deleted");
        }
    });
  };

  const activateclub = () => {
    Axios.post("http://localhost:3001/activateclub", {
        name: clubname,
    }).then((response)=> {
        if (response.data.message){
            setActivateclubstatus("Activated");
        } else {
            setActivateclubstatus(response.data[0].Name);
        }
    });
  };

  const deactivateclub = () => {
    Axios.post("http://localhost:3001/deactivateclub", {
        name: clubname,
    }).then((response)=> {
        if (response.data.message){
            setDeactivateclubstatus("Deactivated");
        } else {
            setDeactivateclubstatus(response.data[0].Name);
        }
    });
  };

  const activateuser = () => {
    Axios.post("http://localhost:3001/activateuser", {
        name: username,
    }).then((response)=> {
        if (response.data.message){
            setActivateuserstatus("Activated");
        } else {
            setActivateuserstatus(response.data[0].Username);
        }
    });
  };

  const deactivateuser = () => {
    Axios.post("http://localhost:3001/deactivateuser", {
        name: username,
    }).then((response)=> {
        if (response.data.message){
            setDeactivateuserstatus("Deactivated");
        } else {
            setDeactivateuserstatus(response.data[0].Username);
        }
    });
  };

  const activatematch = () => {
    let seppos = 0;
    while(match[seppos] !== "-"){
        seppos++;
    }
    let ht = match.substring(0,seppos-2);
    let at = match.substring(seppos+3,match.length);
    Axios.post("http://localhost:3001/activatematch", {
        ht: ht,
        at: at,
    }).then((response)=> {
        if (response.data.message){
            setActivatematchstatus("Activated");
        } else {
            setActivatematchstatus(response.data[0].idMatches);
        }
    });
  };

  const deactivatematch = () => {
    let seppos = 0;
    while(match[seppos] !== "-"){
        seppos++;
    }
    let ht = match.substring(0,seppos-2);
    let at = match.substring(seppos+3,match.length);
    Axios.post("http://localhost:3001/deactivatematch", {
        ht: ht,
        at: at,
    }).then((response)=> {
        if (response.data.message){
            setDeactivatematchstatus("Deactivated");
        } else {
            setDeactivatematchstatus(response.data[0].idMatches);
        }
    });
  };

  const displayclubs = () => {
    Axios.get("http://localhost:3001/getclubs").then((response) => {
        if (response){
            console.log(response);
            let clubs = "-";
            for (var i=0; i<response.data.length; i++){
                clubs = clubs + response.data[i].Name + "-";
            }
            setDeleteclubstatus(clubs);
        }
    })
  };

  const displayinactiveclubs = () => {
    Axios.get("http://localhost:3001/getinactiveclubs").then((response) => {
        if (response){
            console.log(response);
            let clubs = "-";
            for (var i=0; i<response.data.length; i++){
                clubs = clubs + response.data[i].Name + "-";
            }
            setActivateclubstatus(clubs);
        }
    })
  };

  const displayactiveclubs = () => {
    Axios.get("http://localhost:3001/getactiveclubs").then((response) => {
        if (response){
            console.log(response);
            let clubs = "-";
            for (var i=0; i<response.data.length; i++){
                clubs = clubs + response.data[i].Name + "-";
            }
            setDeactivateclubstatus(clubs);
        }
    })
  };

  const displayrateablematches = () => {
    Axios.get("http://localhost:3001/getactivematches").then((response) => {
        if (response){
            console.log(response);
            let match = "/";
            for (var i=0; i<response.data.length; i++){
                match = match + response.data[i].HomeTeam + " " + response.data[i].HomeGoal + "-" + response.data[i].AwayGoal + " " + response.data[i].AwayTeam + "/";
            }
            setDeactivatematchstatus(match);
        }
    })
  };

  const displayexemptmatches = () => {
    Axios.get("http://localhost:3001/getinactivematches").then((response) => {
        if (response){
            console.log(response);
            let match = "/";
            for (var i=0; i<response.data.length; i++){
                match = match + response.data[i].HomeTeam + " " + response.data[i].HomeGoal + "-" + response.data[i].AwayGoal + " " + response.data[i].AwayTeam + "/";
            }
            setActivatematchstatus(match);
        }
    })
  };

  const displayinactiveusers = () => {
    Axios.get("http://localhost:3001/getinactiveusers").then((response) => {
        if (response){
            console.log(response);
            let users = "-";
            for (var i=0; i<response.data.length; i++){
                users = users + response.data[i].Username + "-";
            }
            setActivateuserstatus(users);
        }
    })
  };

  const displayactiveusers = () => {
    Axios.get("http://localhost:3001/getactiveusers").then((response) => {
        if (response){
            console.log(response);
            let users = "-";
            for (var i=0; i<response.data.length; i++){
                users = users + response.data[i].Username + "-";
            }
            setDeactivateuserstatus(users);
        }
    })
  };

  let history = useHistory();

  return (
      <div className = "auth-form-container">
          <h2>Administrative Tasks</h2>
          <form className="user-form" onSubmit = {handleSubmit}>
              <button onClick={() => setAddclubpopup(true)}>Add a football club</button>
              <Popup trigger={addclubpopup} setTrigger = {setAddclubpopup}>
                <h3>Add a football club</h3>
                <label htmlFor = "clubname">Football Club Name</label>
                <input onChange={(e) => setClubname(e.target.value)} name = "name" id = "name" placeholder = "Football Club Name"/>
                <label htmlFor = "password">Set a Password</label>
                <input onChange={(e) => setClubpassword(e.target.value)} type = "password" placeholder = "********" id = "password" name = "password"/>
                <p><button onClick={addclub}>Register</button></p>
                <p>{addclubstatus}</p>
              </Popup>
              <button onClick={() => setDeleteclubpopup(true)}>Delete a football club</button>
              <Popup trigger={deleteclubpopup} setTrigger = {setDeleteclubpopup}>
                <h3>Delete a football club</h3>
                <button onClick={displayclubs}>Display all clubs / Update</button>
                <p>{deleteclubstatus}</p>
                <label htmlFor = "clubname">Football Club Name</label>
                <input onChange={(e) => setClubname(e.target.value)} name = "name" id = "name" placeholder = "Football Club Name"/>
                <p><button onClick={deleteclub}>Delete Football Club</button></p>
              </Popup>
              <button onClick={() => setActivateclubpopup(true)}>Activate a football club</button>
              <Popup trigger={activateclubpopup} setTrigger = {setActivateclubpopup}>
                <h3>Activate a football club</h3>
                <button onClick={displayinactiveclubs}>Display all inactive club accounts / Update</button>
                <p>{activateclubstatus}</p>
                <label htmlFor = "clubname">Football Club Name</label>
                <input onChange={(e) => setClubname(e.target.value)} name = "name" id = "name" placeholder = "Football Club Name"/>
                <p><button onClick={activateclub}>Activate the Football Club's Account</button></p>
              </Popup>
              <button onClick={() => setDeactivateclubpopup(true)}>Deactivate a football club</button>
              <Popup trigger={deactivateclubpopup} setTrigger = {setDeactivateclubpopup}>
                <h3>Deactivate a football club</h3>
                <button onClick={displayactiveclubs}>Display all active club accounts / Update</button>
                <p>{deactivateclubstatus}</p>
                <label htmlFor = "clubname">Football Club Name</label>
                <input onChange={(e) => setClubname(e.target.value)} name = "name" id = "name" placeholder = "Football Club Name"/>
                <p><button onClick={deactivateclub}>Deactivate the Football Club's Account</button></p>
              </Popup>
              <button onClick={() => setActivateuserpopup(true)}>Activate a user</button>
              <Popup trigger={activateuserpopup} setTrigger = {setActivateuserpopup}>
                <h3>Activate a user</h3>
                <button onClick={displayinactiveusers}>Display all inactive users / Update</button>
                <p>{activateuserstatus}</p>
                <label htmlFor = "username">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} name = "name" id = "name" placeholder = "Userame"/>
                <p><button onClick={activateuser}>Activate the Username's Account</button></p>
              </Popup>
              <button onClick={() => setDeactivateuserpopup(true)}>Deactivate a user</button>
              <Popup trigger={deactivateuserpopup} setTrigger = {setDeactivateuserpopup}>
                <h3>Deactivate a user</h3>
                <button onClick={displayactiveusers}>Display all active users / Update</button>
                <p>{deactivateuserstatus}</p>
                <label htmlFor = "username">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} name = "name" id = "name" placeholder = "Userame"/>
                <p><button onClick={deactivateuser}>Deactivate the Username's Account</button></p>
              </Popup>
              ________________________________________________________
              <h2>Web Application Content Settings</h2>

              <button onClick={() => setActivatematchpopup(true)}>Activate visibility of a match</button>
              <Popup trigger={activatematchpopup} setTrigger = {setActivatematchpopup}>
                <h3>Activate visibility of a match</h3>
                <button onClick={displayexemptmatches}>Display all non-visible matches / Update</button>
                <p>{activatematchstatus}</p>
                <label htmlFor = "username">Match</label>
                <input onChange={(e) => setMatch(e.target.value)} name = "name" id = "name" placeholder = "Userame"/>
                <p><button onClick={activatematch}>Activate the match</button></p>
              </Popup>

              <button onClick={() => setDeactivatematchpopup(true)}>Deactivate visibility of a match</button>
              <Popup trigger={deactivatematchpopup} setTrigger = {setDeactivatematchpopup}>
                <h3>Deactivate visibility of a match</h3>
                <button onClick={displayrateablematches}>Display all visible matches / Update</button>
                <p>{deactivatematchstatus}</p>
                <label htmlFor = "username">Match</label>
                <input onChange={(e) => setMatch(e.target.value)} name = "name" id = "name" placeholder = "A 3-3 B"/>
                <p><button onClick={deactivatematch}>Deactivate the match</button></p>
              </Popup>
              ________________________________________________________
              <h2>User Settings</h2>
              <label htmlFor = "password">Password Change</label>
              <input onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" placeholder = "********"/>
              <button onClick={updatepassword}>Change Now!</button>
              <label> </label>
              <button onClick={() => history.push('/')}>Sign Out</button>
          </form>
      </div>
  );
}