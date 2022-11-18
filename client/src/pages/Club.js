import React, {useState} from "react"
import Axios from 'axios'
import { useHistory } from "react-router-dom";

export const Club = (props) => {
  const [pass, setPassword] = useState("");
  const [loginstatus, setLoginstatus] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(loginstatus);
  }

  const updatepassword = () => {
    Axios.post("http://localhost:3001/clubupdatepassword", {
        id: global.fullname,  
        password: pass,
    }).then((response)=> {
        if (response.data.message){
            setLoginstatus(response.data.message);
        } else {
            setLoginstatus(response.data[0].Name);
            global.fullname = response.data[0].Name;
        }
    });
  };

  let history = useHistory();

  return (
      <div className = "auth-form-container">
          <h2>User Settings</h2>
          <form className="user-form" onSubmit = {handleSubmit}>
              <label htmlFor = "password">Password Change</label>
              <input onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" placeholder = "********"/>
              <button onClick={updatepassword}>Change Now!</button>
              <label> </label>
              <button onClick={() => history.push('/')}>Sign Out</button>
          </form>
      </div>
  );
}