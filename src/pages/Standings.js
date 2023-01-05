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
  function toggleTable(){
    var table = document.getElementById("myTable");
    if(table.style.display == "none"){
      table.style.display = "block";
    }
    else{
      table.style.display = "none";
    }
  }

  let history = useHistory();

  return (
    <p>
      <button className='st-btn' onClick={() =>{
        toggleTable();
        getStandings();
      }}>Show Standings</button>
      <h2 class = "header-std" color='yellow'>Standings</h2>
      <table id="myTable">
        <thead>
          <tr>
            <th>Club</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Goals</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standingsList.map((val,key) =>{
          return(
            <tr class = "wpos">
              <td>{val.Club}</td>
              <td>{val.W}</td>
              <td>{val.D}</td>
              <td>{val.L}</td>
              <td>{val.Goals}</td>
              <td>{val.GD}</td>
              <td>{val.Points}</td>
            </tr>
          )
          
          
          
        
        })}

        </tbody>
      </table>
      
      
      
      <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
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
    </p>
  )
}


