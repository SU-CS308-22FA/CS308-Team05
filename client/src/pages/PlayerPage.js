import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export const PlayerPage = () => {
  const [playerList, set_playerList] = useState([]);
  const [playerList_v2, set_playerList_v2] = useState([]);
  const [displayTable, set_displayTable] = useState({
    playerList: false,
    playerList_v2: false
  });

  const [button1Color, setButton1Color] = useState("");
  const [button2Color, setButton2Color] = useState("");

  const getPlayers = () => {
    Axios.get("http://localhost:3001/PLAYERPAGE").then((response)=>{
        console.log(response);
        set_playerList(response.data);
        set_displayTable({
          playerList: true,
          playerList_v2: false
        });
        setButton1Color("blue-button");
        setButton2Color("");
    });
  };

  const getPlayers_v2 = () => {
    Axios.get("http://localhost:3001/PLAYERPAGE_v2").then((response)=>{
        console.log(response);
        set_playerList_v2(response.data);
        set_displayTable({
          playerList: false,
          playerList_v2: true
        });
        setButton1Color("");
        setButton2Color("blue-button");
    });
  };

  let history = useHistory();
  return (
    <div className="centerContent">
      <p> 
      <button className={button1Color} onClick={getPlayers}><img src={"https://tmssl.akamaized.net/images/wappen/tiny/11282.png?lm=1489273987"} alt="Team logo" /><span>AlanyaSpor vs Kayserispor</span><img src={"https://tmssl.akamaized.net/images/wappen/tiny/3205.png?lm=1520239955"} alt="Team logo" /></button>
      <label> </label>   
      <button className={button2Color} onClick={getPlayers_v2}><img src={"https://tmssl.akamaized.net/images/wappen/tiny/6646.png?lm=1441625196"} alt="Team logo" /><span>Karagümrük vs Trabzonspor</span><img src={"https://tmssl.akamaized.net/images/wappen/tiny/449.png?lm=1665404571"} alt="Team logo" /></button>
      </p>
      <h2 class = "header-std" color='yellow'>Player List</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Citizenship</th> 
            <th>Team</th>      
            <th>Logo</th>         
            <th>Position</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Saves</th>     
            <th>Vote</th>        
          </tr>
        </thead>
      <tbody>
      {displayTable.playerList && playerList.map((val,key) =>{
        return (
         <tr class="wpos">
            <td>{val.Player}</td>
            <td>{val.Citizenship}</td>
            <td>{val.Team}</td>
            <td>
            {val.Team === "Alanyaspor" && <img src={"https://tmssl.akamaized.net/images/wappen/tiny/11282.png?lm=1489273987"} alt="Team logo" />}
            {val.Team === "Kayserispor" && <img src={"https://tmssl.akamaized.net/images/wappen/tiny/3205.png?lm=1520239955"} alt="Team logo" />}
            {val.Team === "FatihKaragümrük" && <img src={"https://tmssl.akamaized.net/images/wappen/tiny/6646.png?lm=1441625196"} alt="Team logo" />}
            {val.Team === "Trabzonspor" && <img src={"https://tmssl.akamaized.net/images/wappen/tiny/449.png?lm=1665404571"} alt="Team logo" />}
            </td>
            <td>{val.Position}</td>
            <td>{val.Goals}</td>
            <td>{val.Assists}</td>
            <td>{val.Saves}</td>
            <td>{val.Vote}</td>     
          </tr>
       )
      })}
      {displayTable.playerList_v2 && playerList_v2.map((val,key) =>{
        return (
        <tr class="wpos">
           <td>{val.Player}</td>
           <td>{val.Citizenship}</td>
            <td>{val.Team}</td>
            <td>
            {val.Team === "Alanyaspor" && <img src={"https://tmssl.akamaized.net/images/wappen/tiny/11282.png?lm=1489273987"} alt="Team logo" />}
            {val.Team === "Kayserispor" && <img src={"https://tmssl.akamaized.net/images/wappen/tiny/3205.png?lm=1520239955"} alt="Team logo" />}
            {val.Team === "FatihKaragümrük" && <img src={"https://tmssl.akamaized.net/images/wappen/tiny/6646.png?lm=1441625196"} alt="Team logo" />}
            {val.Team === "Trabzonspor" && <img src={"https://tmssl.akamaized.net/images/wappen/tiny/449.png?lm=1665404571"} alt="Team logo" />}
           </td>
           <td>{val.Position}</td>
           <td>{val.Goals}</td>
           <td>{val.Assists}</td>
           <td>{val.Saves}</td>
           <td>{val.Vote}</td>        
         </tr>
       )
      })}
      </tbody>
      </table>
       <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
        <div>
      </div>
    </div>  
    )
  } 
