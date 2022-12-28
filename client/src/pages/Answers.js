import React, {useState} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';

/**
  * @param {functionAnswers}
  * @description  A function that returns a display of answers for a given user by an admin.
  * @returns {JSX.Element} JSX element that contains the display
  * @param {functiongetAnswers}{
  * @description Retrieves answers that have been given by admins to questions 
  * @param {String} "/answers" - path of the request
  * @param {Object} req - request object
  * @param {Object} res - response object
  * @param {function} (req,res) - The callback function which handles the request
  * @returns {Object} result - result object from the query (an array of answers if successful, error otherwise.)
 */
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
      <button className = "link-btn" onClick={() => history.push("/User")}>Go back</button>
      
    </p>

    
  )
}