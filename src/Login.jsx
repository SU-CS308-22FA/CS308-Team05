import React, {useState} from "react"
import Axios from 'axios'

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
            } else {
                setLoginstatus(response.data[0].Username);
            }
        });
    };

    return (
        <div className = "auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit = {handleSubmit}>
                <label htmlFor = "email">Email or Username</label>
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
}