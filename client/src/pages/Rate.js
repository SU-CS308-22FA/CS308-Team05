import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { Collapse, } from 'antd';

const { Panel } = Collapse;

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
            <h2 className = "header">Rating System</h2>
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