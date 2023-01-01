import React, {useState} from "react"
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import Popup  from "./Popup";
export const AdminAnswer = () => {
    const [isResolved, setIsResolved] = useState("");
    const [adminName, setAdminName] = useState("");
    const [userSent, setUserSent] = useState("");
    const [content, setContent] = useState("");
    const [senderName, setSenderName] = useState("");

    const [sendanswerpopup, setSendanswerpopup] = useState(false);


    const updateresolved = () => {
        Axios.post("http://localhost:3001/updateresolved", {
            senderName: userSent,
        }).then((response)=> {
            if (response.data.message){
                setIsResolved(response.data.message);
            } else {
                setIsResolved(response.data[0].senderName);
            }
        });
      };

      const sendanswer = () => {
        if (userSent !== "" && adminName !== "" && content) {
            Axios.post("http://localhost:3001/sendanswer", {
                content: content,
                userSent: userSent, 
                adminName: adminName
            }).then((response)=> {
                global.adminName = response.data[0].adminName;
            });
        } else {
            
        }
        global.adminName = adminName;
    };
    let history = useHistory();
    return (
    
        <div className='email-form'>
            <div className='email-header'>
            
                
                
            </div>
            <h2 className='header'>
                    Send Answer
            </h2>
            <div className='email-text'> Answer the question:</div>
    
    
            <form className='questionnaire'>
                <tr>
                    <td>
                        <label className='lbl-email'>The Admin Name:</label>
                        <input onChange={(e) => setAdminName(e.target.value)} placeholder='Enter your name, administrator'></input>
                        <label></label>
                    </td>
                    <td>
                        <label className='lbl-email'>The user's name:</label>
                        <input onChange={(e) => setSenderName(e.target.value)} placeholder='Enter the user name'></input>
                    </td>
                    <td>
                        <label className='lbl-email'>The Answer:</label>
                        <label></label>
                        <input onChange={(e) => setContent(e.target.value)} placeholder='Write here...'></input>
                    </td>
                </tr>
            </form>
            <button className='btn-submit' onClick={() =>{
                sendanswer();
                setSendanswerpopup(true);
                updateresolved();
            }}>Send Answer</button>
            <Popup trigger={sendanswerpopup}  setTrigger={setSendanswerpopup}>
                <h3>Your answer has been sent.</h3>
                <h3></h3>
                <label>The user will be able to see the answer in their answers page!</label>

            </Popup>
    
            <button className='link-btn' onClick={() => history.push("/Admin")}>Go back</button>
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