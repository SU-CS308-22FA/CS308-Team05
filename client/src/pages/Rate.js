import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import RatePopup  from "./RatePopup";
import { Collapse, } from 'antd';
import Popup  from "./Popup";

const { Panel } = Collapse;

export const Rate = (props) => {
    const [matcharray, setMatchArray] = useState([]);
    const [servermatcharray, setServerMatchArray] = useState([]);
    const [activatematchdisplay, setActivatematchdisplay] = useState(false);
    const [showmatches, setShowMatches] = useState(false);
    const [match, setMatch] = useState("");

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
                setActivatematchdisplay(false);
                let clubs = "";
                let matchtable = "";
                if (matcharray.length !== 0){
                    matcharray.splice(0, matcharray.length);
                }
                if (servermatcharray.length !== 0){
                    servermatcharray.splice(0, servermatcharray.length);
                }
                for (var i=0; i<response.data.length; i++){
                    clubs = response.data[i].HomeTeam + " " + response.data[i].HomeGoal + "-" + response.data[i].AwayGoal + " " + response.data[i].AwayTeam;
                    matchtable = response.data[i].HomeTeam + "-" + response.data[i].AwayTeam;
                    matcharray.push(clubs);
                    servermatcharray.push(matchtable);
                }
                console.log(matcharray);
                setActivatematchdisplay(true);
                setMatchArray(matcharray);
                setServerMatchArray(servermatcharray);
            }
        })
    };

    const selectmatch = (paragraph) => {
        setShowMatches(true);
        setMatch(paragraph);
    };

    return (
        <div className = "auth-form-container">
            <h2>Rating System</h2>
            <form className="rate-form" onSubmit = {handleSubmit}>
                <button onClick={displaymatches}>Display Rateable Matches</button>
                <p>
                    {matcharray.map(paragraph => 
                    <div>
                        <button onClick={() => selectmatch(paragraph)}>{
                            paragraph
                        }</button>
                        <RatePopup trigger={showmatches} setTrigger = {setShowMatches} match = {match}>
                        <h3>Players</h3>
                        </RatePopup>
                    </div>)}
                </p> 
            </form>
            <button className = "link-btn" onClick={() => history.push('/User')}> Go back to user page </button>
        </div>
    );
}