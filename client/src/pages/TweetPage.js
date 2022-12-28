import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { TwitterTweetEmbed} from 'react-twitter-embed';

/**
 * @function TweetPage
 * @description This function displays the latest 3 twitter posts of TFF on website.
 * @returns {Object} Twitter Posts - The latest 3 twitter post of TFF 
 */
export const TweetPage = () => {

    let history = useHistory();
    return (
        <div className="centerContent">
          <h2>Latest Tweets of TFF</h2>
      
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
