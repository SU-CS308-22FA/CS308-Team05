import React, {useState} from "react"
import Axios from 'axios'

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
        </div>
    )
}