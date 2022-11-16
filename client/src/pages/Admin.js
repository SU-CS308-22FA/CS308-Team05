import React, {useState} from "react"
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import Popup  from "./Popup";

export const Admin = (props) => {
  const [pass, setPassword] = useState("");
  const [loginstatus, setLoginstatus] = useState("");
  const [addclubpopup, setAddclubpopup] = useState(false);
  const [deleteclubpopup, setDeleteclubpopup] = useState(false);
  const [activateclubpopup, setActivateclubpopup] = useState(false);
  const [deactivateclubpopup, setDeactivateclubpopup] = useState(false);
  const [activateuserpopup, setActivateuserpopup] = useState(false);
  const [deactivateuserpopup, setDeactivateuserpopup] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(loginstatus);
  }

  const updatepassword = () => {
    Axios.post("http://localhost:3001/adminupdatepassword", {
        id: global.fullname,  
        password: pass,
    }).then((response)=> {
        if (response.data.message){
            setLoginstatus(response.data.message);
        } else {
            setLoginstatus(response.data[0].Name);
            global.fullname = response.data[0].Username;
        }
    });
  };

  const addclub = () => {
  };  

  const deleteclub = () => {
  };

  const activateclub = () => {
  };

  const deactivateclub = () => {
  };

  const activateuser = () => {
  };

  const deactivateuser = () => {
  };

  let history = useHistory();

  return (
      <div className = "auth-form-container">
          <h2>User Settings</h2>
          <form className="user-form" onSubmit = {handleSubmit}>
              <button onClick={() => setAddclubpopup(true)}>Add a football club</button>
              <Popup trigger={addclubpopup} setTrigger = {setAddclubpopup}>
                <h3>Add a football club</h3>
                <p>I worked</p>
              </Popup>
              <button onClick={() => setDeleteclubpopup(true)}>Delete a football club</button>
              <Popup trigger={deleteclubpopup} setTrigger = {setDeleteclubpopup}>
                <h3>Delete a football club</h3>
                <p>I worked</p>
              </Popup>
              <button onClick={() => setActivateclubpopup(true)}>Activate a football club</button>
              <Popup trigger={activateclubpopup} setTrigger = {setActivateclubpopup}>
                <h3>Activate a football club</h3>
                <p>I worked</p>
              </Popup>
              <button onClick={() => setDeactivateclubpopup(true)}>Deactivate a football club</button>
              <Popup trigger={deactivateclubpopup} setTrigger = {setDeactivateclubpopup}>
                <h3>Deactivate a football club</h3>
                <p>I worked</p>
              </Popup>
              <button onClick={() => setActivateuserpopup(true)}>Activate a user</button>
              <Popup trigger={activateuserpopup} setTrigger = {setActivateuserpopup}>
                <h3>Activate a user</h3>
                <p>I worked</p>
              </Popup>
              <button onClick={() => setDeactivateuserpopup(true)}>Deactivate a user</button>
              <Popup trigger={deactivateuserpopup} setTrigger = {setDeactivateuserpopup}>
                <h3>Deactivate a user</h3>
                <p>I worked</p>
              </Popup>
              <label htmlFor = "password">Password Change</label>
              <input onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" placeholder = "********"/>
              <button onClick={updatepassword}>Change Now!</button>
              <label> </label>
              <button onClick={() => history.push('/')}>Sign Out</button>
          </form>
      </div>
  );
}