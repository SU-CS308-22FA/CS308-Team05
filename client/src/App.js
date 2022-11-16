import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./pages/Login";
import { Sign_Up } from "./pages/Sign_Up";
import { User } from "./pages/User";
import { Home } from "./pages/Home";
import { AdminLogin } from "./pages/AdminLogin";
import { ClubLogin } from "./pages/ClubLogin";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

function App() {

  global.fullname = "";

  return (
    <Router>
      <div className="App">
      <img src="/images/Logo.png" alt=""/>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/adminlogin">
              <AdminLogin />
          </Route>
          <Route exact path="/clublogin">
              <ClubLogin />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route path="/signup">
            <Sign_Up />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
        <img src="/images/rate12.png" alt=""/>
      </div>
    </Router>
  );
}

export default App;