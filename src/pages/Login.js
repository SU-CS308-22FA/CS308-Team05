<<<<<<< HEAD:src/Login.js
import React, {useEffect, useState} from "react"
import Axios from 'axios'

export const Login = (props) => {
    const [identification, setID] = useState("");
    const [pass, setPass] = useState("");
    const [loginstatus, setLoginstatus] = useState("");

    Axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            identification: identification,  
            password: pass,
        }).then((response)=> {
            if (response.data.message){
                setLoginstatus(response.data.message);
            } else {
                setLoginstatus(response.data[0].Username);
            }
            global.fullname = response.data[0].FullName;
        });
    };

    useEffect (() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn = true){
                setLoginstatus(response.data.user[0].Username);
            }
        });
    }, []);

    return (
        <div className = "auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit = {handleSubmit}>
                <label htmlFor = "email">Username</label>
                <input value={identification} onChange={(e) => setID(e.target.value)} type = "text" placeholder = "email@gmail.com / username" id = "identification" name = "identification"/>
                <label htmlFor = "password">Password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder = "********" id = "password" name = "password"/>
                <button onClick={login}>Log In</button>
            </form>
            <button className = "link-btn" onClick={() => props.onFormSwitch('sign_up')}>Don't have an account? Create new account.</button>
            <h1>
                {loginstatus}
            </h1>
        </div>
    )
=======
import React, {useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export const Login = (props) => {
    const [identification, setID] = useState("");
    const [pass, setPass] = useState("");
    const [loginstatus, setLoginstatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(identification);
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            identification: identification,  
            password: pass,
        }).then((response)=> {
            if (response.data.message){
                setLoginstatus(response.data.message);
                <Redirect to = "/Home"/>;
            } else {
                setLoginstatus(response.data[0].Username);
                <Redirect to = "/Home"/>;
                
            }
        });
    };
    let history = useHistory();
    return (
        <div className = "auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit = {handleSubmit}>
                <label htmlFor = "email">Email or Username</label>
                <input value={identification} onChange={(e) => setID(e.target.value)} type = "text" placeholder = "email@gmail.com / username" id = "identification" name = "identification"/>
                <label htmlFor = "password">Password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder = "********" id = "password" name = "password"/>
                <button onClick={() => history.push('/User')}>Log In</button>
            </form>
            <button className = "link-btn" onClick={() => history.push('/signup')}>Don't have an account? Create new account.</button>
            <h1>
                {loginstatus}
            </h1>
        </div>
    )
>>>>>>> 5b56883351e24c6286253d060d214c5e3ef8188d:src/pages/Login.js
}