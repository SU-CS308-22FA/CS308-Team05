import React, {useEffect, useState} from "react"
import Axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
  
function StarPlayer() {
  const [match, setVotedMatch] = useState("");
  const [match1, setVotedMatch1] = useState("");
  const [match2, setVotedMatch2] = useState("");

  Axios.defaults.withCredentials = true;

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
}
let planam = [];
let plavot = [];
  const displaystarplayer = () => {
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
          
        } 
        else {
          console.log(response.data.message);
          for (var j=0; j<response.data.length; j++){
            planam.push(response.data[j].PlayerName);
            plavot.push(parseInt(response.data[j].Motm));
          }
          setVotedMatch2(planam);
          setVotedMatch1(plavot);
          
        }
    })
    .catch(err =>{
      console.log(err);
  });
};
  useEffect(() => {
    displaystarplayer();
  }, []);
  return (
    <div className = "auth-form-container">
      <form className="rate-form" onSubmit = {handleSubmit}></form> 
        <h1>Total Votes Players Got Divided by voter amount</h1>
              <div>
                  <Bar
                    data={{
                      labels: match2,
                      datasets: [{
                        label: 'total votes players got',
                        data: match1,
                        backgroundColor: ["aqua", "green", "red", "yellow"],
                        borderColor: ["aqua", "green", "red", "yellow"],
                        borderWidth: 0.5,
                      }]
                    }}
                    height={400}
                    options={{
                      maintainAspectRatio: false,
                        responsive:true,
                        title: { text: "total votes players got", display: true },
                        
                        legend: {
                          labels: {
                            fontColor: "purple",
                            fontSize: 30,
                          },
                        },
                    }}
                  />
              </div>
          
    </div>
    
  );
}
  
export default StarPlayer;