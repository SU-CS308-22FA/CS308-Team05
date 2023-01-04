import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import { Collapse, Button } from 'antd';
import Cookies from 'js-cookie'
const { Panel } = Collapse;

export const User = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loginstatus, setLoginstatus] = useState("");
  const [user,setUser] = useState(null);





  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

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

  const [playerList, set_playerList] = useState([]);

  const getPlayers = () => {
    Axios.get("http://localhost:3001/PLAYERS").then((response)=>{
        console.log(response);
        set_playerList(response.data);
    });
  };
  const userCookie = getCookie(username);


  return (
    <div className="general">
       <h2 className="header">Welcome Back!</h2>
        <div className="user-form">
            <form className="user-form" onSubmit = {handleSubmit}>
                <Collapse defaultActiveKey={['0']}>
                    <Panel header = "User Operations" key = '1' className="panel-gnrl">
                        <td>
                            <label htmlFor = "username">Username Change</label>
                            <input onChange={(e) => setUsername(e.target.value)} type = "username" name = "username" id = "username" placeholder = "Username"/>
                            <button onClick={updateusername}>Change Now!</button>

                        </td>
                        
                        <td>
                            <label htmlFor = "email">Email Change</label>
                            <input onChange={(e) => setEmail(e.target.value)} type = "email" id = "email" name = "email" placeholder = "email@gmail.com"/>
                            <button onClick={updateemail}>Change Now!</button>
                        </td>
                        <td>
                            <label htmlFor = "password">Password Change</label>
                            <input onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" placeholder = "****"/>
                            <button onClick={updatepassword}>Change Now!</button>
                        </td>
                        <td>
                            <button onClick={deleteuser} className = "link-btn" >Delete User</button>

                        </td>
                        <td>
                            <button className = "link-btn" onClick={() => history.push('/')}>Sign Out</button>
                            <label> </label>
                        </td>
                    </Panel>
                    <Panel header = "Contents about the League" key = '2' className="panel-gnrl">
                        <td>
                            <button onClick={() => history.push('/WeekPage')}>Open fixture page</button>
                            <label></label>

                        </td>
                        <td>
                            <label> </label>
                            <button onClick={() => history.push('/Standings')}>League Standings</button>
                            <label> </label>
                        </td>
                        <td>

                            <button onClick={() => history.push('/TweetPage')}>Show Tweets</button>
                            <label> </label>
                        </td>
                        <td>
                            <label> </label>
                            <button onClick={() => history.push('/Forums')}>View Forum Page</button>
                            <label> </label>
                        </td>
                        <td>
                            <button onClick={() => history.push('/PlayerPage')}>View the players</button>
                            <label> </label>
                        </td>
                        <td>
                            <button onClick={() => history.push('/Rate')}>RATE PLAYERS !!!</button>
                            <label> </label>
                        </td>
                    </Panel>
                    <Panel header = "For Help" key = '3' className="panel-gnrl">
                        <td>
                            <button onClick={() => history.push('/FAQ')}>FAQ Page</button>
                            <label> </label>
                        </td>
                        <td>
                            <button onClick={() => history.push('/Answers')}>View answers to your questions</button>
                            <label></label>
                        </td>
                        <td>
                            <button onClick={() => history.push('/About')}>About Us</button>
                        </td>
                    </Panel>
                </Collapse>
           
                    
            </form>
            <button className="link-btn" onClick={() => history.push('/')}>Go Back</button>
        </div>
        <div className="parent-btns">
        <div className="child-btns">
          <tr>
            <td>
              <button className="gnl-btn" onClick={() => history.push('/FAQ')}>Help</button>
            </td>
            <td>
              <button className="gnl-btn" onClick={() => history.push('/Contact')}>Contact</button>
            </td>
            <td>
              <button className="gnl-btn" onClick={() => history.push('/About')}>About Us</button>
            </td>
          </tr>
          
        </div>
      </div>
    </div>
    
  );
}