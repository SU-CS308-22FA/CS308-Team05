<<<<<<< HEAD:src/Sign_Up.js
import React, {useState} from "react"
import Axios from 'axios'

export const Sign_Up = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [signupstatus, setSignupstatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    Axios.defaults.withCredentials = true;
    const signup = () => {
        if (name != "" || username != "" || email != "" || pass != "") {
        Axios.post("http://localhost:3001/signup", {
            fullname: name, 
            username: username, 
            email: email, 
            password: pass
        }).then((response)=> {
            console.log(response);
            global.fullname = response.data[0].FullName;
            setSignupstatus("Registered");
        });
        } else {
            setSignupstatus("There is an empty field");
        }
    };

    return (
        <div className = "auth-form-container">
            <h2>Sign Up</h2>
            <form className="sign_up-form" onSubmit = {handleSubmit}>
                <label htmlFor = "name">Full Name</label>
                <input onChange={(e) => setName(e.target.value)} name = "name" id = "name" placeholder = "Full Name"/>
                <label htmlFor = "username">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type = "username" name = "username" id = "username" placeholder = "Username"/>
                <label htmlFor = "email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type = "email" id = "email" name = "email" placeholder = "email@gmail.com"/>
                <label htmlFor = "password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" placeholder = "********"/>
                <button onClick={signup}>Sign Up Now!</button>
            </form>
            <button className = "link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            <h1>
                {signupstatus}
            </h1>
        </div>
    )
=======
import React, {useState} from "react"
import Axios from 'axios'
import { useHistory } from "react-router-dom";

export const Sign_Up = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const signup = () => {
        Axios.post("http://localhost:3001/signup", {
            fullname: name, 
            username: username, 
            email: email, 
            password: pass
        }).then((response)=> {
            console.log(response);
        });
    };
    let history = useHistory();

    return (
        <div className = "auth-form-container">
            <h2>Sign Up</h2>
            <form className="sign_up-form" onSubmit = {handleSubmit}>
                <label htmlFor = "name">Full Name</label>
                <input onChange={(e) => setName(e.target.value)} name = "name" id = "name" placeholder = "Full Name"/>
                <label htmlFor = "username">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type = "username" name = "username" id = "username" placeholder = "Username"/>
                <label htmlFor = "email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type = "email" id = "email" name = "email" placeholder = "email@gmail.com"/>
                <label htmlFor = "password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" placeholder = "********"/>
                <button onClick={() => history.push('/User')}>Sign Up Now!</button>
            </form>
            <button className = "link-btn" onClick={() => history.push('/login')}>Already have an account? Login here.</button>
        </div>
    )
>>>>>>> 5b56883351e24c6286253d060d214c5e3ef8188d:src/pages/Sign_Up.js
}