import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
  
function TotalVote() {
  const [match, setVotedMatch] = useState("");

  Axios.defaults.withCredentials = true;

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
}

  const displaytotalvoteppp = () => {
    let seppos = 0;
    while(global.match[seppos] !== "-"){
        seppos++;
    }
    
    let table = global.match.substring(0,seppos-2)+global.match.substring(seppos+3,global.match.length);
    setVotedMatch(table);

    Axios.post("http://localhost:3001/dtvppp", {
        server: table, 
    }).then((response)=> {
        if (response.data.message){
            console.log(response.data.message);
        } 
        else {

        }
    });
};

  return (
    <div className="TotalVote">
      <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
      <div style={{ maxWidth: "650px" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
            datasets: [
              {
                // Label for bars
                label: "total count/value",
                // Data or value of your each variable
                data: [1552, 1319, 613, 1400],
                // Color of each bar
                backgroundColor: ["aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
  
export default TotalVote;