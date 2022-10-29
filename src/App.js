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
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Sign_Up onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;