import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Sign_Up } from "./Sign_Up";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className = "App">
      <img src="/images/Logo.png" alt=""/>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Sign_Up onFormSwitch={toggleForm}/>
      }
      <img src="/images/rate12.png" alt=""/>
    </div>
  );
}

export default App;