import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export const PlayerPage = () => {
  const [playerList, set_playerList] = useState([]);
  const [playerList_v2, set_playerList_v2] = useState([]);

    const getPlayers = () => {
      Axios.get("http://localhost:3001/PLAYERPAGE").then((response)=>{
          console.log(response);
          set_playerList(response.data);
      });
    };

    const getPlayers_v2 = () => {
      Axios.get("http://localhost:3001/PLAYERPAGE_v2").then((response)=>{
          console.log(response);
          set_playerList_v2(response.data);
      });
    };

    let history = useHistory();
    return (
      <div className="centerContent">
        <p>     
          <button onClick={getPlayers}> Istanbulspor vs Trabzonspor </button>
          {playerList.map((val, key) => {
            return <div> {val.name} {val.team} {val.role}</div>;
          })}
          <label> </label>
          <button onClick={getPlayers_v2}> Sivasspor vs Gaziantepspor </button>
          {playerList_v2.map((val, key) => {
            return <div> {val.name} {val.team} {val.role}</div>;
          })}          
        </p>
        <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
        <div>
        </div>
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
    )
  }
  
