import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { Collapse, } from 'antd';

const { Panel } = Collapse;

export const Rate = (props) => {
    const [match, setMatch] = useState("");
    const [matches, setMatches] = useState("");
    const [everymatch, setEverymatch] = useState([]);
    const [message, setMessage] = useState("");

    Axios.defaults.withCredentials = true;

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

    const displaymatches = () => {
        Axios.get("https://cs308-renderserver.onrender.com/getactivematches").then((response) => {
            if (response){
                console.log(response);
                let possiblematches = "/";
                for (var i=0; i<response.data.length; i++){
                    everymatch.push(response.data[i].HomeTeam + " " + response.data[i].HomeGoal + "-" + response.data[i].AwayGoal + " " + response.data[i].AwayTeam);
                    possiblematches = possiblematches + response.data[i].HomeTeam + " " + response.data[i].HomeGoal + "-" + response.data[i].AwayGoal + " " + response.data[i].AwayTeam + "/";
                }
                setMatches(possiblematches);
            }
        })
    };

    const selectmatch = () => {
        let inputcheck = false;
        for (var i=0; i<everymatch.length; i++){
            if (everymatch[i] === match){
                inputcheck = true;
            }
        }
        if (inputcheck){
            global.match = match;
            console.log(global.match);
            history.push('/PlayerRate');
        }
        setMessage("Wrong input! Please try again!");
    };

    return (
        <div className = "auth-form-container">
            <h2 className="header">Rating System</h2>
            <form className="rate-form" onSubmit = {handleSubmit}>
                <button onClick={displaymatches}>Display Rateable Matches</button>
                <p>{matches}</p>
                <label htmlFor = "match">Match</label>
                <div></div>
                <input onChange={(e) => setMatch(e.target.value)} name = "name" id = "name" placeholder = "A 3-3 B"/>
                <p><button onClick={selectmatch}>Choose this match</button></p>
                <p> {message} </p>
            </form>
            <button className = "link-btn" onClick={() => history.push('/User')}> Go back to user page </button>
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
        </div>
    );
}