import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./pages/Login";
import { Sign_Up } from "./pages/Sign_Up";
import { User } from "./pages/User";
import { Home } from "./pages/Home";
import { AdminLogin } from "./pages/AdminLogin";
import { ClubLogin } from "./pages/ClubLogin";
import { Club } from "./pages/Club";
import { Admin } from "./pages/Admin";
import { CommentMain } from "./pages/CommentMain";
import { FAQ } from "./pages/FAQ";
import { AdminEmail } from "./pages/AdminEmail";
import { AdminAnswer } from "./pages/AdminAnswer";
import { Answers } from "./pages/Answers";
import { Email } from "./pages/Email";
import { Standings } from "./pages/Standings";
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
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/club">
            <Club />
          </Route>
          <Route exact path="/commentmain">
            <CommentMain />
          </Route>
          <Route exact path="/FAQ">
            <FAQ />
          </Route>
          <Route exact path="/Standings">
            <Standings />
          </Route>
          <Route exact path="/Email">
            <Email />
          </Route>
          <Route exact path="/AdminEmail">
            <AdminEmail />
          </Route>
          <Route exact path="/AdminAnswer">
            <AdminAnswer />
          </Route>
          <Route exact path="/Answers">
            <Answers />
          </Route>
        </Switch>
        <img src="/images/rate12.png" alt=""/>
      </div>
    </Router>
  );
}

export default App;