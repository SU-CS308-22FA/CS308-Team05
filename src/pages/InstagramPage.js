import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { InstagramEmbed } from 'react-social-media-embed';

export const InstagramPage = () => {

    let history = useHistory();
    return (
        <div>
          <h2 className='header'>Latest Instagram posts of TFF</h2>     
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/p/Cm1mmy2qhMW/" width={328} captioned />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CmztPWnq23S/" width={328} captioned />
          </div>  
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CmgmCNHKVzl/" width={328} captioned />
          </div>  
          <p>     
            <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
          </p>        
        </div>  
        
      )
    }