import React, {useState} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';

/**
  * @param {functionAdminEmail}
  * @description  A function that returns a display of questions asked by users that have not been answered yet.
  * @returns {JSX.Element} JSX element that contains the display
  * @param {functiongetQuestions}{
  * @description Retrieves questions that are unresolved from the database
  * @param {String} "/questions" - path of the request
  * @param {Object} req - request object
  * @param {Object} res - response object
  * @param {function} (req,res) - The callback function which handles the request
  * @returns {Object} result - result object from the query (an array of questions which are not answered if successful, error otherwise.)
 */
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