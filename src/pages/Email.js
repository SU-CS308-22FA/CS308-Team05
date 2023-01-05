import React, {useState} from 'react'
import Axios from 'axios'
import Popup  from "./Popup";
import { useHistory, Redirect } from "react-router-dom";
export const Email = () => {
    const [senderName, setSenderName] = useState("");
    const [receiverAdmin, setReceiverAdmin] = useState("");
    const [content, setContent] = useState("");


    const [sendquestionpopup, setSendquestionpopup] = useState(false);

    Axios.defaults.withCredentials = true;
    const sendquestion = () => {
        if (senderName !== "" && receiverAdmin !== "" && content) {
            Axios.post("https://cs308-renderserver.onrender.com/sendquestion", {
                senderName: senderName,
                receiverAdmin: receiverAdmin, 
                content: content
            }).then((response)=> {
                console.log(response);
                global.senderName = response.data[0].senderName;
            });
        } else {
            
        }
        global.senderName = senderName;
    };

    let history = useHistory();

  return (
    
    <div className='email-form'>
        <div className='email-header'>
            Welcome to the Question Submission Page!
            <h2>
            </h2>
            
        </div>
        <div className='email-text'> Here, you can ask our admins any questions that you could not find the answers to in our FAQ page. Please don't hesitate to ask. We respond in a short period of time!</div>


        <form className='questionnaire'>
            <label>Your name:</label> 
            <label></label>
            <input onChange={(e) => setSenderName(e.target.value)} placeholder='Name'></input>
            <label>The Admin you want to ask questions:</label>
            <label></label>
            <input onChange={(e) => setReceiverAdmin(e.target.value)} placeholder='Admin Name'></input>
            <label>What is your question?</label>
            <label></label>
            <input className='email-input' onChange={(e) => setContent(e.target.value)} placeholder='Write here...'></input>
        </form>
        <button className='btn-submit' onClick={() =>{
            sendquestion();
            setSendquestionpopup(true);
        }}>Send Question</button>
        <Popup trigger={sendquestionpopup}  setTrigger={setSendquestionpopup}>
            <h3>Your question has been sent.</h3>
            <h3></h3>
            <label>Thank you for your question! Our admins will look into your issue and respond from the FAQ Page!</label>

        </Popup>

        <button className='link-btn' onClick={() => history.push("/User")}>Go back</button>
        

    </div>
  )
}