import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { YouTubeEmbed } from 'react-social-media-embed';

export const YoutubePage = () => {

    let history = useHistory();
    return (
        <div>
          <h2>Latest Youtube of TFF</h2> 
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <YouTubeEmbed url="https://www.youtube.com/watch?v=8Dou65gjZsY" width={325} height={220} />
          </div>
          <h2></h2> 
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <YouTubeEmbed url="https://www.youtube.com/watch?v=lAROPT6c4l0" width={325} height={220} />
          </div>
          <h2></h2> 
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <YouTubeEmbed url="https://www.youtube.com/watch?v=1oQ9M0lUjHo" width={325} height={220} />
          </div>
          <p>     
            <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
          </p>        
        </div>  
        
      )
    }