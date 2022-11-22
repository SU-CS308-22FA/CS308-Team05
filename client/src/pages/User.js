import React, {useState} from "react"
import Axios from 'axios'
import { useHistory } from "react-router-dom";

export const User = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loginstatus, setLoginstatus] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

  const updateusername = () => {
    Axios.post("https://cs308sprint1.herokuapp.com/updateusername", {
        id: global.fullname,  
        username: username,
    }).then((response)=> {
        if (response.data.message){
            setLoginstatus(response.data.message);
        } else {
            setLoginstatus(response.data[0].Username);
            global.fullname = response.data[0].FullName;
        }
    });
  };

  const updateemail = () => {
    Axios.post("https://cs308sprint1.herokuapp.com/updateemail", {
        id: global.fullname,  
        email: email,
    }).then((response)=> {
        if (response.data.message){
            setLoginstatus(response.data.message);
        } else {
            setLoginstatus(response.data[0].Username);
            global.fullname = response.data[0].FullName;
        }
    });
  };

  const updatepassword = () => {
    Axios.post("https://cs308sprint1.herokuapp.com/updatepassword", {
        id: global.fullname,  
        password: pass,
    }).then((response)=> {
        if (response.data.message){
            setLoginstatus(response.data.message);
        } else {
            setLoginstatus(response.data[0].Username);
            global.fullname = response.data[0].FullName;
        }
    });
  };

  const deleteuser = () => {
    Axios.post("https://cs308sprint1.herokuapp.com/deleteuser", {
        id: global.fullname,  
    }).then((response)=> {
        if (response.data.message){
            setLoginstatus(response.data.message);
        } else {
            setLoginstatus(response.data[0].Username);
            global.fullname = "";
            history.push('/');
        }
    });
    history.push('/');
  };

  let history = useHistory();


  const [playerList, set_playerList] = useState([]);

  const getPlayers = () => {
    Axios.get("http://localhost:3001/PLAYERS").then((response)=>{
        console.log(response);
        set_playerList(response.data);
    });
  };

  return (
      <div className = "auth-form-container">
          <h2>User Settings</h2>
          <form className="user-form" onSubmit = {handleSubmit}>
              <label htmlFor = "username">Username Change</label>
              <input onChange={(e) => setUsername(e.target.value)} type = "username" name = "username" id = "username" placeholder = "Username"/>
              <button onClick={updateusername}>Change Now!</button>
              <label htmlFor = "email">Email Change</label>
              <input onChange={(e) => setEmail(e.target.value)} type = "email" id = "email" name = "email" placeholder = "email@gmail.com"/>
              <button onClick={updateemail}>Change Now!</button>
              <label htmlFor = "password">Password Change</label>
              <input onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" placeholder = "********"/>
              <button onClick={updatepassword}>Change Now!</button> 
              <label> </label>
              <button onClick={deleteuser} color = "red" >Delete User</button>
              <label> </label>
              <button onClick={() => history.push('/')}>Sign Out</button>
              <label> </label>
              <button onClick={getPlayers}> Show data</button>

              {playerList.map((val, key) => {
                return <div>left team: {val.oyuncular_sol} --- left substitute{val.yedekler_sol} --- left manager{val.teknik_direktor_sol} --- right team{val.oyuncular_sag} --- right substitute{val.yedekler_sag} --- right manager{val.teknik_direktor_sag}</div>;
              })}
          </form>
      </div>
  );
}