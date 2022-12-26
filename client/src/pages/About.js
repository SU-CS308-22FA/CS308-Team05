import React from 'react'
import { useHistory, Redirect } from "react-router-dom";
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;



export const About = () => {
  let history = useHistory();
  return(
    <div className="general">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2 className='header'>About Us</h2>
          <p>Welcome to our web page RATE12! We set our motto as "LET THE FANS DECIDE!" as we believe that you, the user should be the main decider of football events in Turkey. Below, you can find more, learn about our app, creators, format, etc. We appreciate any sort of merit and criticism about our work! Do not hesitate to give us feedback! -The RATE12 Team</p>
        </div>
        <Collapse defaultActiveKey={['0']}>
          <Panel header="Our Creators" key="1" className='panel-gnrl'>
            <h3>Ömer Can Öztürk-Junior Year Bachelor's Student</h3>
            <img src="/images/oco_2_6.jpeg" alt=''></img>
          </Panel>
          <Panel header="What is the name of the Application" key="2" className='panel-gnrl'>
            <p>Our app is called RATE12. We let YOU, THE FANS to decide the best players,teams and coaches!</p>
          </Panel>
          <Panel header="How to access through cloud?" key="3" className='panel-gnrl'>
            <p>Our app is deployed remotely on Heroku. So you can easily access it from your browser.</p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4" className='panel-gnrl'>
            <p>You can edit,delete,add,select users from our web app and also view the current standings, teams, players,coaches and referees present in the Turkish Football Federation's Super League! So yes, you can multi-task with our app!</p>
          </Panel>
          <Panel header="How can I change my password?" key="5" className='panel-gnrl'>
            <p>You can change or edit your user credidentials from your own user page!</p>
          </Panel>
          <Panel header="How to manage my account?" key="6" className='panel-gnrl'>
            <p>Go to your user settings and adjust your account preferences to your liking!</p>
          </Panel>
        </Collapse>
        
      </div>
      <button className='link-btn' onClick={() => history.push('/User')}>Go back</button>
    </div>  
  );
}