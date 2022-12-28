import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

/**
 * @function WeekPage
 * @description gives the option to redirect to one of the first 6 weeks of 2022/2023 tff league
 * @param {function} (button onClick) - The button function to redirect
 * @param {function} (history.push) -The function which handles which page to redirect
 */
export const WeekPage = () => {

    let history = useHistory();
    return (
      <div className="centerContent">
        <p>
          <button className = "btn" onClick={() => history.push('/Week1')}>First week</button>
          <button className = "btn" onClick={() => history.push('/Week2')}>Second week</button>
          <button className = "btn" onClick={() => history.push('/Week3')}>Third week</button>
        </p>
        <p>
          <button className = "btn" onClick={() => history.push('/Week4')}>Fourth week</button>
          <button className = "btn" onClick={() => history.push('/Week5')}>Fifth week</button>
          <button className = "btn" onClick={() => history.push('/Week6')}>Sixth week</button>
        </p>
        
        <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
      </div>
    )
  }