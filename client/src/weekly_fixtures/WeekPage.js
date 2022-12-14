import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export const WeekPage = () => {

    let history = useHistory();
    return (
      <div className="centerContent">
        <p>
          <button className = "link-btn" onClick={() => history.push('/Week1')}>First week</button>
          <button className = "link-btn" onClick={() => history.push('/Week2')}>Second week</button>
          <button className = "link-btn" onClick={() => history.push('/Week3')}>Third week</button>
        </p>
        <p>
          <button className = "link-btn" onClick={() => history.push('/Week4')}>Fourth week</button>
          <button className = "link-btn" onClick={() => history.push('/Week5')}>Fifth week</button>
          <button className = "link-btn" onClick={() => history.push('/Week6')}>Sixth week</button>
        </p>
        
        <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
      </div>
    )
  }