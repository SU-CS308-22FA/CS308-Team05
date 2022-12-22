import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { FacebookEmbed } from 'react-social-media-embed';

export const FacebookPage = () => {

    let history = useHistory();
    return (
        <div>
          <h2>Latest Facebook posts of TFF</h2>     
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FacebookEmbed url="https://www.facebook.com/TFFALTLIGLER/photos/a.650431255063045/5302636329842491/" width={550} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FacebookEmbed url="https://www.facebook.com/TFFALTLIGLER/photos/a.650431255063045/5302295019876622" width={550} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FacebookEmbed url="https://www.facebook.com/TFFALTLIGLER/photos/a.650431255063045/5302240439882080/" width={550} />
          </div>
          <p>     
            <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
          </p>
        </div>  
        
      )
    }