import React, {useState} from "react"

export const Sign_Up = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className = "auth-form-container">
            <h2>Sign Up</h2>
            <form className="sign_up-form" onSubmit = {handleSubmit}>
                <label htmlFor = "name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name = "name" id = "name" placeholder = "Full Name"/>
                <label htmlFor = "username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type = "email" name = "username" id = "username" placeholder = "Username"/>
                <label htmlFor = "email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type = "email" id = "email" name = "email" placeholder = "email@gmail.com"/>
                <label htmlFor = "password">Password</label>
                <input value = {pass} onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" placeholder = "********"/>
                <button>Sign Up Now!</button>
            </form>
            <button className = "link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}