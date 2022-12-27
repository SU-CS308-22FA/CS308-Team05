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
import { PlayerPage } from "./pages/PlayerPage";
import { TweetPage } from"./pages/TweetPage";
import { Rate } from "./pages/Rate";
import { PlayerRate } from "./pages/PlayerRate";
import { About } from "./pages/About";
import { Week1 } from "./weekly_fixtures/Week1";
import { Week2 } from "./weekly_fixtures/Week2";
import { Week3 } from "./weekly_fixtures/Week3";
import { Week4 } from "./weekly_fixtures/Week4";
import { Week5 } from "./weekly_fixtures/Week5";
import { Week6 } from "./weekly_fixtures/Week6";
import { WeekPage } from "./weekly_fixtures/WeekPage";
import { Trabzonspor } from "./teams/Trabzonspor";

import { useHistory, Redirect } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";



function App() {
 
  let history = useHistory(); 
  global.fullname = "";
  global.match = "";

  return (
    <Router>
      <div className="App">
      <img src="/images/Logo.png" height= "500px" alt=""/>
      <header className="appel">RATE12</header>
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
          <Route exact path="/Week1">
              <Week1 />
          </Route>
          <Route exact path="/Week2">
              <Week2 />
          </Route>
          <Route exact path="/Week3">
              <Week3 />
          </Route>
          <Route exact path="/Week4">
              <Week4 />
          </Route>
          <Route exact path="/Week5">
              <Week5 />
          </Route>
          <Route exact path="/Week6">
              <Week6 />
          </Route>
          <Route exact path="/WeekPage">
              <WeekPage />
          </Route>
          <Route exact path="/Trabzonspor">
              <Trabzonspor />
          </Route>
          <Route exact path="/PlayerPage">
            <PlayerPage />
          </Route>
          <Route exact path="/TweetPage">
            <TweetPage />
          </Route>
          <Route exact path="/Rate">
            <Rate />
          </Route>
          <Route exact path="/PlayerRate">
            <PlayerRate />
          </Route>
          <Route exact path="/About">
            <About history={history} />
          </Route>
        </Switch>
        <img src="/images/rate12.png" height= "500px" alt=""/>
      </div>
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
    </Router>
    
  );
}

export default App;