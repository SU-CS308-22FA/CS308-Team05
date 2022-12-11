import React, {useEffect, useState} from "react";
import './../App.css';
import Axios from 'axios'
import Rating from "react-rating";
import { useHistory, Redirect } from "react-router-dom";

Axios.defaults.withCredentials = true;

const playerarray = [];
const votearray = [1,1,1,1,1,1,1,1,1,1,1,1];

function getplayers (match) {

    let seppos = 0;
    while(match[seppos] !== "-"){
        seppos++;
    }
    let table = match.substring(0,seppos-2)+match.substring(seppos+3,match.length);

    Axios.post("http://localhost:3001/displayplayers", {
        server: table,  
    }).then((response)=> {
        if (response.data.message){
            console.log(response.data.message);
        } else {
            let players = "";
            if (playerarray.length !== 0){
                playerarray.splice(0, playerarray.length);
            }
            for (var i=0; i<response.data.length; i++){
                players = response.data[i].PlayerName;
                playerarray.push(players);
            }
            return playerarray;
        }
    });
};

export const PlayerRate = (props) => {

    Axios.defaults.withCredentials = true;

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

    const savevote = (match) => {
        let seppos = 0;
        while(match[seppos] !== "-"){
            seppos++;
        }
        let table = match.substring(0,seppos-2)+match.substring(seppos+3,match.length);
    
        for (var i=0; i<votearray.length; i++){
            Axios.post("http://localhost:3001/savevote", {
                server: table,
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
                { getplayers(global.match) }
                <p> {playerarray.map(paragraph => <div> 
                    <div>{paragraph}</div> 
                    <Rating stop={10} initialRating={0}/>
                </div> )} </p>
            <p> <button onClick={savevote(global.match)}> Vote </button> </p> 
            </form>
            <button className = "link-btn" onClick={() => history.push('/Rate')}> Go back to user page </button>
        </div>
    );
}