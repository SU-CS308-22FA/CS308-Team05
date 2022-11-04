import React, {useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { Login } from "./Login";
import { Sign_Up } from "./Sign_Up";

export default function User(){
    let history = useHistory();

    return(
    <Router>
      <div className="App">
      <img src="/images/Logo.png" alt=""/>
        <ul>
          <li>
          <Link to="/login">Login Page</Link>  
          </li>
          <li>
          <Link to="/signup">Sign Up Page</Link> 
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