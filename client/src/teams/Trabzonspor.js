import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export const Trabzonspor = () => {
  const [ballerList, set_ballers] = useState([]);

    const getballers = () => {
        Axios.get("http://localhost:3001/playerphotos").then((response)=>{
          console.log(response);
          set_ballers(response.data);
      });
    };

    let history = useHistory();
    return (
      <div className="centerContent">

        <button onClick={getballers}> Show week 1 fixture of the year</button>
          {ballerList.map((val, key) => {
            return <div> {val.ht_lineup} {val.home_team} {val.ht_score} {val.at_score} {val.alien_team} {val.at_lineup} {val.datetime_of_match} </div>;
          })}

        <p>    
        <button className = "link-btn" onClick={() => history.push('/Week2')}>Visit next week</button>
        <button className = "link-btn" onClick={() => history.push('/WeekPage')}>Go back</button>
        </p>
        
      </div>
    )
  }
  