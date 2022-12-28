import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { Collapse, } from 'antd';
import Rating from "react-rating";

const { Panel } = Collapse;

/**
 * @function PlayerRate
 * @description This function displays the second page of "Rating System". It has a "Display Rateable Players" button that connects to the server,
 * takes the players and the managers in the server from the table assigned to the match user has chosen and puts them in an array. Then these players 
 * and managers are displayed with a 1-10 rating system underneath each player. The rates user gives to the players and managers are stored in an array. 
 * When user rates every player and clicks "Vote" button, the array which store the votes are send to the server.
 * @param {*} props 
 * @param {global.match} global variable which keeps track of which match the user chose to rate the players played in it. It is set to the match which user 
 * has chosen in the previous Rate.js page.
 * @returns The second page of "Rating System" where user can rate the players and the managers in a 1-10 rating based system and saves the ratings to the server. 
 */
export const PlayerRate = (props) => {
    const [match, setMatch] = useState("");
    const [playersarray, setPlayersArray] = useState([]);
    const [votearray, setVoteArray] = useState([]);

    Axios.defaults.withCredentials = true;

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

    const displayplayers = () => {
        let seppos = 0;
        while(global.match[seppos] !== "-"){
            seppos++;
        }
        let table = global.match.substring(0,seppos-2)+global.match.substring(seppos+3,global.match.length);
        setMatch(table);

        Axios.post("http://localhost:3001/displayplayers", {
            server: table,  
        }).then((response)=> {
            if (response.data.message){
                console.log(response.data.message);
            } else {
                console.log(response);
                let allplayers = [];
                for (var i=0; i<response.data.length; i++){
                    allplayers.push(response.data[i].PlayerName);
                }
                setPlayersArray(allplayers);
            }
        });
    };

    const savevote = (rate) => {
        votearray.push(rate);
    }

    const storevotes = () => {
        for (var i=0; i<votearray.length; i++){
            Axios.post("http://localhost:3001/savevote", {
                server: match,
                id: i+1,
                score: (votearray[i]),
            }).then((response)=> {
                if (response.data.message){
                    console.log("Vote succesfully added");
                } else {
                    console.log("Error");
                }
            });
        }
    };

    return (
        <div className = "auth-form-container">
            <h2>Players</h2>
            <form className="rate-form" onSubmit = {handleSubmit}>
                <button onClick={displayplayers}>Display Rateable Players</button>
                <p> {playersarray.map(paragraph => <div> 
                    <div>{paragraph}</div> 
                    <Rating stop={10} initialRating={0} onClick={rate => savevote(rate)}/>
                </div> )} </p>
                <p> <button onClick={storevotes}> Vote </button> </p>
            </form>
            <button className = "link-btn" onClick={() => history.push('/Rate')}> Go back to choosing matches to rate </button>
        </div>
    ); 
}