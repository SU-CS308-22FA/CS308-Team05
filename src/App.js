import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./pages/Login";
import { Sign_Up } from "./pages/Sign_Up";
import { User } from "./pages/User";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
      <img src="/images/Logo.png" alt=""/>
        <ul>
          <li>
    
          </li>
          <li>
         
          </li>
        </ul>

        <Switch>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route path="/signup">
            <Sign_Up />
          </Route>
        </Switch>
        <img src="/images/rate12.png" alt=""/>
      </div>
    </Router>
  );
}

export default App;