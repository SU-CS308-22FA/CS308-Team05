import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export const ClubLogin = (props) => {
    const [identification, setID] = useState("");
    const [pass, setPass] = useState("");
    const [loginstatus, setLoginstatus] = useState("");

    Axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(identification);
    }

    const login = () => {
        if (identification !== "" && pass !== "") {
            Axios.post("http://localhost:3001/clublogin", {
                identification: identification,  
                password: pass,
            }).then((response)=> {
                if (response.data.message){
                    setLoginstatus(response.data.message);
                } else {
                    global.fullname = response.data[0].Name;
                    history.push('/Club');
                }
            });

        } else {
            setLoginstatus("Missing Required Parameter(s)");
        }
    };

    let history = useHistory();

    return (
        <div className = "auth-form-container">
            <h2>Club Login</h2>
            <form className="login-form" onSubmit = {handleSubmit}>
                <label htmlFor = "username">Username</label>
                <input value={identification} onChange={(e) => setID(e.target.value)} type = "text" placeholder = "username" id = "identification" name = "identification"/>
                <label htmlFor = "password">Password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder = "********" id = "password" name = "password"/>
                <button onClick={login}>Log In</button>
            </form>
            <button className = "link-btn" onClick={() => history.push('/')}> Go back to home page </button>
            <h1>
                {loginstatus}
            </h1>
        </div>
    );
}