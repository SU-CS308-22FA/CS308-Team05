import React, {useState} from 'react'
import Axios from 'axios'
import Popup  from "./Popup";
import { useHistory, Redirect } from "react-router-dom";
export const Email = () => {
    const [senderName, setSenderName] = useState("");
    const [receiverAdmin, setReceiverAdmin] = useState("");
    const [content, setContent] = useState("");
    const [questionStatus, setQuestionstatus] = useState("");



    const [sendquestionpopup, setSendquestionpopup] = useState(false);

    Axios.defaults.withCredentials = true;
    const sendquestion = () => {
      Axios.post("http://localhost:3001/sendquestion", {
                senderName: senderName,
                receiverAdmin: receiverAdmin, 
                content: content
            }).then((response)=> {
                
                alert('Your question has been sent! It will be reviewed by our administrators as quickly as possible!');
                
            })
            .catch(error =>{
              alert('Question sending failed: Username does not exist')
            });
        
    };

    let history = useHistory();

  return (
    
    <div className='email-form'>
        <div className='email-header'>
            Welcome to the Question Submission Page!
            
            
        </div>
        <h2 className='header'>
                Send Questions
        </h2>
        <div className='email-text'> Here, you can ask our admins any questions that you could not find the answers to in our FAQ page. Please don't hesitate to ask. We respond in a short period of time!</div>


        <form className='questionnaire'>
            <tr>
                <td>
                    <label className='lbl-email'>Your name:</label>
                    <input onChange={(e) => setSenderName(e.target.value)} placeholder='Name'></input>
                    <label></label>
                </td>
                <td>
                    <label className='lbl-email'>The Admin you want to ask questions:</label>
                    <input onChange={(e) => setReceiverAdmin(e.target.value)} placeholder='Admin Name'></input>
                </td>
                <td>
                    <label className='lbl-email'>What is your question?</label>
                    <label></label>
                    <input className='email-input' onChange={(e) => setContent(e.target.value)} placeholder='Write here...'></input>
                </td>
            </tr>
        </form>
        <button className='btn-submit' onClick={sendquestion}>Send Question</button>
        

        <button className='link-btn' onClick={() => history.push("/User")}>Go back</button>
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
  
