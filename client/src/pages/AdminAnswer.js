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
                userSent: userSent,
                adminName: adminName, 
                content: content
            }).then((response)=> {
                console.log(response);
                global.adminName = response.data[0].adminName;
            });
        } else {
            
        }
        global.adminName = adminName;
    };
    let history = useHistory();
  return (
    <div>
        <form className='questionnaire'>
            <label>The Admin Name:</label> 
            <label></label>
            <input onChange={(e) => setAdminName(e.target.value)} placeholder='Enter your name, administrator:'></input>
            <label>The user's name:</label>
            <label></label>
            <input onChange={(e) => setUserSent(e.target.value)} placeholder='Enter the users name:'></input>
            <label>The answer:</label>
            <label></label>
            <input className='email-input' onChange={(e) => setContent(e.target.value)} placeholder='Write the answer here...'></input>
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

        <button className="link-btn" onClick={() => history.push("/AdminEmail")}>Go back</button>


    </div>
    

    
  )
}