import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { FacebookEmbed } from 'react-social-media-embed';

export const FacebookPage = () => {

    let history = useHistory();
    return (
        <div>
          <h2 className='header'>Latest Facebook posts of TFF</h2>     
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FacebookEmbed url="https://www.facebook.com/tff.org/posts/pfbid0XeUGiEYcpvkEJYUEVxSuu1o9F6o4BW8nnRttFBLNKkAeSfEJFaSWHTMrR6tLKJWVl" width={550} />
          </div>
          <h2></h2> 
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FacebookEmbed url="https://www.facebook.com/tff.org/videos/2180449465539298" width={550} />
          </div>
          <h2></h2> 
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>
            <FacebookEmbed url="https://www.facebook.com/tff.org/photos/a.1436952476444497/2187611531378584/" width={550} />
          </div>
          <p>     
            <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
          </p>
          
        </div>  
        
      )
    }