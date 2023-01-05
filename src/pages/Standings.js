import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

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
    Axios.get("https://cs308-renderserver.onrender.com/standings").then((response) => {
      console.log(response);
      setStandingsList(response.data);

    });

    

  };

  let history = useHistory();

  return (
    <p>
      <button className='st-btn' onClick={getStandings}>Show Standings</button>
      <h1 class = "headin">Standings</h1>
      <tr class = "col">
            <th>Club</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Goals</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
      
      {standingsList.map((val,key) =>{
        return <div className="ptable">
          
          
          <tr class = "wpos">
            <td>{val.Club}</td>
            <td>{val.W}</td>
            <td>{val.D}</td>
            <td>{val.L}</td>
            <td>{val.Goals}</td>
            <td>{val.GD}</td>
            <td>{val.Points}</td>
          </tr>
        
        
        
      </div>
      })}
      <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
    </p>
  )
}


