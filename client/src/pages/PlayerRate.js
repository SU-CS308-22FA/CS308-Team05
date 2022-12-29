import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { Collapse, } from 'antd';
import Rating from "react-rating";

const { Panel } = Collapse;

export const PlayerRate = (props) => {
    const [match, setMatch] = useState("");
    const [message, setMessage] = useState("");
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
                id: i,
                score: (votearray[i]),
            }).then((response)=> {
                if (response.data.message){
                    setMessage("Vote succesfully added");
                } else {
                    setMessage("Error");
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
                <p> {message} </p>
            </form>
            <button className = "link-btn" onClick={() => history.push('/Rate')}> Go back to choosing matches to rate </button>
        </div>
    ); 
}