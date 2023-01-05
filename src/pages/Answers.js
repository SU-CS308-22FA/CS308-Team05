import React, {useState} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';



export const Answers = () => {
    const [answerslist,setAnswersList] = useState([]);

    const getAnswers = () =>{
        Axios.get("https://cs308-renderserver.onrender.com/answers").then((response) => {
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
      <button className = "link-btn" onClick={() => history.push("/User")}>Go back</button>
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
      
    </p>

    
  )
}