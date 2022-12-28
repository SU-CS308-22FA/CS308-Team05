import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

/**
 * @function Week1
 * @description retreieves some data (like home team, alien team, match scores, etc) from database and prints them when clicked to the button
 * @param {function} (button onClick) - The button function to redirect
 * @param {function} (history.push) -The function which handles which page to redirect
 * @param {function} (getresponse) -The function that retrieves the data from database
 */
export const Week1 = () => {
  const [fixtureList, set_fixtures] = useState([]);

    const getfixtures = () => {
        Axios.get("http://localhost:3001/fixtures").then((response)=>{
          console.log(response);
          set_fixtures(response.data);
      });
    };

    let history = useHistory();
    return (
      <div className="centerContent">

        <button onClick={getfixtures}> Show week 1 fixture of the year</button>
          {fixtureList.map((val, key) => {
            return <div> {val.ht_lineup} {val.home_team} {val.ht_score} {val.at_score} {val.alien_team} {val.at_lineup} {val.datetime_of_match} </div>;
          })}

        <p>    
        <button className = "btn" onClick={() => history.push('/Week2')}>Visit next week</button>
        <button className = "link-btn" onClick={() => history.push('/WeekPage')}>Go back</button>
        </p>
        
      </div>
    )
  }
  