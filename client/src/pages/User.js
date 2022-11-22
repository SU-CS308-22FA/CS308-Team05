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
    Axios.post("http://localhost:3001/updateusername", {
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
    Axios.post("http://localhost:3001/updateemail", {
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
    Axios.post("http://localhost:3001/updatepassword", {
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
    Axios.post("http://localhost:3001/deleteuser", {
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
              <label> </label>
              <button onClick={updatepassword}>Change Now!</button>
              <button className = "link-btn" onClick={() => history.push('/commentmain')}>Do you want to comment?</button>
          </form>
      </div>
  );
}