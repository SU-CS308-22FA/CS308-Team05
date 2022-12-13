import React, {useState} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';



export const Answers = () => {
    const [answerslist,setAnswersList] = useState([]);

    const getAnswers = () =>{
        Axios.get("http://localhost:3001/answers").then((response) => {
          console.log(response);
          setAnswersList(response.data);
    
        });
    
        
    
      };

      let history = useHistory();


  return (
    <p>
      
      <button onClick={getAnswers}>Show Answers</button>
      {answerslist.map((val,key) =>{
        return <div>
        <h3>
          {val.adminName} Answered {val.content} for:
          <div>
            {val.userSent}
            <label></label>
            
          </div>
        </h3>
        
        
      </div>
      
      })}
      <button onClick={() => history.push("/User")}>Go back</button>
      
    </p>

    
  )
}