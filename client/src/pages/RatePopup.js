import React, {useEffect, useState} from "react";
import './../App.css';
import Axios from 'axios'
import Rating from "react-rating";

Axios.defaults.withCredentials = true;

const playerarray = [];
const votearray = [];
let voteexist = false;

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
            //console.log(response.data.message);
        } else {
            //console.log(response.data);
        }
        let players = "";
        if (playerarray.length !== 0){
            playerarray.splice(0, playerarray.length);
        }
        for (var i=0; i<response.data.length; i++){
            players = response.data[i].PlayerName;
            playerarray.push(players);
        }
        return playerarray;
    });
};

const savevote = (match) => {
    let seppos = 0;
    while(match[seppos] !== "-"){
        seppos++;
    }
    let table = match.substring(0,seppos-2)+match.substring(seppos+3,match.length);

    Axios.post("http://localhost:3001/savevote", {
        name: global.fullname,
        server: table, 
    }).then((response)=> {
        if (response.data.message){
            console.log("Column succesfully added");
        } else {
            console.log("Error");
        }
    });
};

function RatePopup(props) {
    console.log(props);

    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" onClick={() => props.setTrigger(false)}>Close</button>
                { props.children }
                { getplayers(props.match) }
                <p> {playerarray.map(paragraph => <div> 
                    <div>{paragraph}</div> 
                    <Rating stop={10} initialRating={0}/>
                </div> )} </p>
                <button onClick={savevote(props.match)}> Vote </button>
            </div>
        </div>
    ) : "";
}

export default RatePopup