import React, {useState} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';



export const AdminEmail = () => {
    const [questionsList,setQuestionsList] = useState([]);

    const getQuestions = () =>{
        Axios.get("http://localhost:3001/questions").then((response) => {
          console.log(response);
          setQuestionsList(response.data);
    
        });
    
        
    
      };

      let history = useHistory();


  return (
    <p>

      <h2 className='header'>View Questions</h2>
      
      <button onClick={getQuestions}>Show Questions</button>
      {questionsList.map((val,key) =>{
        return <div>
        <h3>
          {val.senderName} Asked to {val.receiverAdmin}:
          <div>
            {val.content}
            <label></label>
            
          </div>
        </h3>
        
        <button onClick={() => history.push("/AdminAnswer")}>Answer this question.</button>
      </div>
      
      })}
      <button className='link-btn' onClick={() => history.push("/Admin")}>Go back</button>
      
    </p>

    
  )
}