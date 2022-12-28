import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { Collapse, } from 'antd';

const { Panel } = Collapse;

/**
 * @function Rate
 * @description This function displays the first page of "Rating System". It has a "Display Rateable Matches" button that connects to the server and
 * takes the rateable matches that are available to the user and displays them as a string. When the user inputs the match that he/she wants to
 * rate the players in it and clicks "Choose this match button" the function assigns the input to global.match and changes the page to PlayerRate.js
 * @param {*} props 
 * @param {global.match} global variable which keeps track of which match the user chose to rate the players played in it. It is set to NULL.
 * @returns The first page of "Rating System" where user can choose which match they want to rate the players playing in it. 
 */
export const Rate = (props) => {
    const [match, setMatch] = useState("");
    const [matches, setMatches] = useState("");

    Axios.defaults.withCredentials = true;

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

    const displaymatches = () => {
        Axios.get("http://localhost:3001/getactivematches").then((response) => {
            if (response){
                console.log(response);
                let possiblematches = "/";
                for (var i=0; i<response.data.length; i++){
                    possiblematches = possiblematches + response.data[i].HomeTeam + " " + response.data[i].HomeGoal + "-" + response.data[i].AwayGoal + " " + response.data[i].AwayTeam + "/";
                }
                setMatches(possiblematches);
            }
        })
    };

    const selectmatch = () => {
        global.match = match;
        console.log(global.match);
        history.push('/PlayerRate');
    };

    return (
        <div className = "auth-form-container">
            <h2>Rating System</h2>
            <form className="rate-form" onSubmit = {handleSubmit}>
                <button onClick={displaymatches}>Display Rateable Matches</button>
                <p>{matches}</p>
                <label htmlFor = "match">Match</label>
                <div></div>
                <input onChange={(e) => setMatch(e.target.value)} name = "name" id = "name" placeholder = "A 3-3 B"/>
                <p><button onClick={selectmatch}>Choose this match</button></p>
            </form>
            <button className = "link-btn" onClick={() => history.push('/User')}> Go back to user page </button>
        </div>
    );
}