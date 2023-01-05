import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export const Week6 = () => {
  const [fixtureList, set_fixtures] = useState([]);

    const getfixtures = () => {
        Axios.get("http://localhost:3001/fixtures_w6").then((response)=>{
          console.log(response);
          set_fixtures(response.data);
      });
    };

    let history = useHistory();
    return (
      <div className="centerContent">

        <p>
          <button onClick={getfixtures}> Show week 6 fixture of the year</button>
          {fixtureList.map((val, key) => {
            return <div> {val.ht_lineup} {val.home_team} {val.ht_score} {val.at_score} {val.alien_team} {val.at_lineup} {val.datetime_of_match}</div>;
          })}
        </p>
        
        <p>
          <button className = "link-btn" onClick={() => history.push('/Week5')}>Visit previous week</button>
          <button className = "link-btn" onClick={() => history.push('/WeekPage')}>Go back</button>
        </p>
      </div>
    )
  }