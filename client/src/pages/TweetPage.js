import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { TwitterTweetEmbed} from 'react-twitter-embed';

export const TweetPage = () => {

    let history = useHistory();
    return (
        <div className="centerContent">
          <h2>Latest Tweets of TFF</h2>
      
          <div className="selfCenter spaceBetween">
            <TwitterTweetEmbed
              onLoad={function noRefCheck(){}}
              tweetId="1607333164371902464"         
            />
          </div>
          <div className="selfCenter spaceBetween">
            <TwitterTweetEmbed
              onLoad={function noRefCheck(){}}
              tweetId="1609812694692929536"         
            />
          </div>
          <div className="selfCenter spaceBetween">
            <TwitterTweetEmbed
              onLoad={function noRefCheck(){}}
              tweetId="1609135517769297920"         
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
