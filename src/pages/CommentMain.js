import React, {useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import Comments from "../comments/Comments";

export const CommentMain = (props) => {

    let history = useHistory();

    return (
        <div className = "auth-form-container">
          <h1>Welcome to the comment section!</h1>
          <Comments
            commentsUrl="https://cs308-renderserver.onrender.com/comments"
            currentUserId="1"
          />
          <button className = "link-btn" onClick={() => history.push('/user')}>Go back</button>
        </div>
      );
}