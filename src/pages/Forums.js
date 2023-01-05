import React from 'react'
import { useHistory } from 'react-router-dom'
import { Comments } from '../comments/Comments'


export const Forums = () => {

    let history = useHistory("");
  return (
    <div className='forum'>
        <h2 className='header'>Forums</h2>
        <div className='explanation'>
            <h3 className='forum-expl'>Welcome to the RATE12 Open Forums! This page is a place where you, the users can share their expressinon to their desires so long as they do not prohibit our terms. Feel free to jump in and join the community!</h3>
        </div>
        <Comments currentUserId="1"/>

        <button className="link-btn" onClick={() => history.push('/user')}>Go Back</button>
        <div className="parent-btns">
                <div className="child-btns">
                <tr>
                    <td>
                    <button className="gnl-btn" onClick={() => history.push('/FAQ')}>Help</button>
                    </td>
                    <td>
                    <button className="gnl-btn" onClick={() => history.push('/Contact')}>Contact</button>
                    </td>
                    <td>
                    <button className="gnl-btn" onClick={() => history.push('/About')}>About Us</button>
                    </td>
                </tr>
                
                </div>
            </div>
        
    </div>
  )
}
