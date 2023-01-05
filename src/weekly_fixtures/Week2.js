import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export const Week2 = () => {
  const [fixtureList, set_fixtures] = useState([]);

    const getfixtures = () => {
        Axios.get("https://cs308-renderserver.onrender.com/fixtures_w2").then((response)=>{
          console.log(response);
          set_fixtures(response.data);
      });
    };

    let history = useHistory();
    return (
      <div className="centerContent">

        <p>
          <button onClick={getfixtures}> Show week 2 fixture of the year</button>
          {fixtureList.map((val, key) => {
            return <div> {val.ht_lineup} {val.home_team} {val.ht_score} {val.at_score} {val.alien_team} {val.at_lineup} {val.datetime_of_match}</div>;
          })}
        </p>
        <p>
          <button className = "link-btn" onClick={() => history.push('/Week1')}>Visit previous week</button>
          <button className = "btn" onClick={() => history.push('/Week3')}>Visit next week</button>
        </p>
        
        <button className = "link-btn" onClick={() => history.push('/WeekPage')}>Go back</button>
      </div>
    )
  }