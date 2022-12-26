import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { TwitterTweetEmbed} from 'react-twitter-embed';

export const TweetPage = () => {

    let history = useHistory();
    return (
        <div className="centerContent">
          <h2 className = "header">Latest Tweets of TFF</h2>
      
          <div className="selfCenter spaceBetween">
            <TwitterTweetEmbed
              onLoad={function noRefCheck(){}}
              tweetId="1601535882930294791"         
            />
          </div>
          <div className="selfCenter spaceBetween">
            <TwitterTweetEmbed
              onLoad={function noRefCheck(){}}
              tweetId="1601526809149214721"         
            />
          </div>
          <div className="selfCenter spaceBetween">
            <TwitterTweetEmbed
              onLoad={function noRefCheck(){}}
              tweetId="1601189764493111297"         
            />
          </div>
          <p>     
            <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
          </p>
          <div>
          </div>
        </div>    
      )
    }
