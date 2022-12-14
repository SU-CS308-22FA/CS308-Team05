import React from 'react';
import { useHistory, Redirect } from "react-router-dom";
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;



export const FAQ = () => {
  let history = useHistory();
  return(
    <div id="FAQ" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Welcome to the FAQ Page of RATE12. Here you can try to find answers to your concerns about our services.</p>
        </div>
        <Collapse defaultActiveKey={['0']}>
          <Panel header="What does our app use?" key="1">
            <p>We use React for our frontend and NodeJS along with mySQL for our backend codings.</p>
          </Panel>
          <Panel header="What is the name of the Application" key="2">
            <p>Our app is called RATE12. We let YOU, THE FANS to decide the best players,teams and coaches!</p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>Our app is deployed remotely on Heroku. So you can easily access it from your browser.</p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>You can edit,delete,add,select users from our web app and also view the current standings, teams, players,coaches and referees present in the Turkish Football Federation's Super League! So yes, you can multi-task with our app!</p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p>You can change or edit your user credidentials from your own user page!</p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>Go to your user settings and adjust your account preferences to your liking!</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Could not find an answer to your problem?</h3>
          <p>Submit to us your spesific concern and let us try to help!</p>
          <Button type="primary" onClick={() => history.push("/Email")} size="large"><i className="fas fa-envelope"></i> Send your question</Button>
        </div>
      </div>
    </div>  
  );
}