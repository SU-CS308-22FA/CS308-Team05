import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export const Home = (props) => {

    let history = useHistory();

    return (
        <div className = "auth-form-container">
            <h2>WELCOME TO RATE12</h2>
            <h2>LET THE FANS DECIDE!</h2>
            <button className = "homebuttonstyle" onClick={() => history.push('/signup')}>If you are an admin please click here!</button>
            <button className = "homebuttonstyle" onClick={() => history.push('/signup')}>If you are a football club please click here!</button>
            <button className = "homebuttonstyle" onClick={() => history.push('/login')}>If you have an account please click here!</button>
            <button className = "homebuttonstyle" onClick={() => history.push('/signup')}>If you are new please click here!</button>
        </div>
    );
}