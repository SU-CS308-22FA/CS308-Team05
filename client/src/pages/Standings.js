import React, { useState } from 'react'
import Axios from 'axios'


  


export const Standings = () => {
  const [Club, setClub] = useState("");
  const [Games, setGames] = useState(0);
  const [W, setW] = useState(0);
  const [D, setD] = useState(0);
  const [L, setL] = useState(0);
  const [Goals, setGoals] = useState("");
  const [GD, setGD] = useState(0);
  const [Points, setPoints] = useState(0);
  const [standingsList,setStandingsList] = useState([]);

  const getStandings = () =>{
    Axios.get("http://localhost:3001/standings").then((response) => {
      console.log(response);
      setStandingsList(response.data);

    });

    

  };

  return (
    <p>
      
      <button onClick={getStandings}>Show Standings</button>
      {standingsList.map((val,key) =>{
        return <div>
        <h3>
          Club: {val.Club}
          <h3>Games: {val.Games}</h3>
          <h3>Wins: {val.W}</h3>
          <h3>Draws: {val.D}</h3>
          <h3>Losses: {val.L}</h3>
          <h3>Goals: {val.Goals}</h3>
          <h3>GD: {val.GD}</h3>
          <h3>Points: {val.Points}</h3>
        </h3>
        
        
      </div>
      })}
    </p>
  )
}


