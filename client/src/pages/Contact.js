import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";
import { Collapse, Button } from 'antd';
const { Panel } = Collapse;

export const Contact = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Location, setLocation] = useState("");
    const[contactsList,setContactsList] = useState([]);

    let history = useHistory();

    const getContacts = () =>{
        Axios.get("http://localhost:3001/contacts").then((response) => {
          console.log(response);
          setContactsList(response.data);
    
        });
    
        
    
    };


  return (
    <div>
        <div>
            <h2 className='header'>Contacts</h2>
            <h3 className='lbl-header'>
                Our Creator Contacts
            </h3>

        </div>
        <div>
            <button onClick={getContacts}>Contacts</button>
            {contactsList.map((val,key) =>{
                let name = val.Name;
                let email = val.Email;
                let loc = val.Location;
                return <Collapse defaultActiveKey={['0']}>
                    <Panel header= {name} key={'?'}>
                        <p>Email Address: {email}</p>
                        <p>From: {loc}</p>
                        
                    </Panel>

                    

                </Collapse>
            })}
    
        </div>
        <button className='link-btn' onClick={() => history.push("/User")}>Go back</button>
        
        
        
        
        
    </div>
    
  )
}