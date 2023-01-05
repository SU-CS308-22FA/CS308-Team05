import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { Collapse, } from 'antd';

const { Panel } = Collapse;

export const Club = (props) => {
    const [match, setVotedMatch] = useState("");
    const [matches, setVotedMatches] = useState("");

    Axios.defaults.withCredentials = true;

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }
    
    const displayvotedmatches = () => {

        Axios.post("http://localhost:3001/clubvotepage", {team : global.fullname}).then((response) => {
            if (response){
                console.log(response);
                let possiblematches = "/";
                
                for (var i=0; i<response.data.length; i++){
                    possiblematches = possiblematches + response.data[i].home_team + " " + response.data[i].ht_score + "-" + response.data[i].at_score + " " + response.data[i].alien_team + "/";
                }
                setVotedMatches(possiblematches);
            }
        })
    };

    const selectvotedmatch = () => {
        global.match = match;
        console.log(global.match);
        history.push('/MatchDisplay');
    };

    return (
        <div className = "auth-form-container">
            <h2>Rating Graphics</h2>
            <form onSubmit = {handleSubmit}>
                <button onClick={displayvotedmatches}>Display Voted Matches</button>
                <p>{matches}</p>
                <label htmlFor = "match">Match</label>
                <div></div>
                <input onChange={(e) => setVotedMatch(e.target.value)} name = "name" id = "name" placeholder = "X 0-0 Y"/>
                <p><button onClick={selectvotedmatch}>Choose this match</button></p>
            </form>
            <button className = "link-btn" onClick={() => history.push('/')}> Go back </button>
        </div>
    );
}