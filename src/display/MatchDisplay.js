import React, {useEffect, useState} from "react"
import { useHistory, Redirect } from "react-router-dom";

export const MatchDisplay = (props) => {
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

    return (
        <div className = "auth-form-container">
            <h2>Vote Charts</h2>
            <form className="rate-form" onSubmit = {handleSubmit}>
                <button onClick={() => history.push('/TotalVote')}>Display Total Vote</button>
                <label></label>
                <p><button onClick={() => history.push('/TotalVoteppp')}>Display Total Vote Divided by People Voted</button></p>
                <label></label>
                <p><button onClick={() => history.push('/StarPlayer')}>Display Star Player</button></p>
            </form>
            <button className = "link-btn" onClick={() => history.push('/Club')}> Go back to choosing matches to rate </button>

        </div>
        
    ); 
}