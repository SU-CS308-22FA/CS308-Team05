import React, {useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

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
        if (name !== "" && username !== "" && email !== "" && pass !== "") {
            Axios.post("http://localhost:3001/signup", {
                fullname: name, 
                username: username, 
                email: email, 
                password: pass
            }).then((response)=> {
                console.log(response);
                global.fullname = response.data[0].FullName;
                setSignupstatus("Registered");
                history.push('/User');
            });
        } else {
            setSignupstatus("Missing Required Parameter(s)");
        }
        global.fullname = name;
    };

    let history = useHistory();

    return (
        <div className = "auth-form-container">
            <h2 className="header">Sign Up</h2>
            <form className="sign_up-form" onSubmit = {handleSubmit}>
                <label htmlFor = "name">Full Name</label>
                <input onChange={(e) => setName(e.target.value)} name = "name" id = "name" placeholder = "Full Name"/>
                <label htmlFor = "username">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type = "username" name = "username" id = "username" placeholder = "Username"/>
                <label htmlFor = "email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type = "email" id = "email" name = "email" placeholder = "email@gmail.com"/>
                <label htmlFor = "password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" placeholder = "********"/>
                <label></label>
                <button onClick={signup}>Sign Up Now!</button>
            </form>
            <label></label>
            <label></label>
            <button onClick={() => history.push('/Login')}>Already have an account? Login here.</button>
            <label></label>
            <label></label>
            <button className = "link-btn" onClick={() => history.push('/')}>Go back to home page</button>
            <h1>
                {signupstatus}
            </h1>
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