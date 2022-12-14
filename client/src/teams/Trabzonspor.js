import React, { useContext, useState } from 'react'
import { useHistory, Redirect } from "react-router-dom";

export const Trabzonspor = () => {
    let history = useHistory();
    return (
      <div>
        <img src = "https://img.a.transfermarkt.technology/portrait/header/292199-1630524224.png?lm=1" height = "70px" weight = "70px" alt=""/>
        <p>
        Uğurcan Çakır:
        Goalkeeper
        </p>

        <img src = "https://img.a.transfermarkt.technology/portrait/header/69646-1663875743.png?lm=1" height = "70px" weight = "70px" alt=""/>
        <p>
        Jens Stryger Larsen
        </p>

        <p>
        <img src = "https://img.a.transfermarkt.technology/portrait/header/149752-1630527249.png?lm=1" height = "70px" weight = "70px" alt=""/>
        Vitor Hugo
        </p>

        <p>
        <img src = "https://img.a.transfermarkt.technology/portrait/header/182688-1630526199.png?lm=1" height = "70px" weight = "70px" alt=""/>
        Manolis Siopis
        </p>

        <p>
        <img src = "https://img.a.transfermarkt.technology/portrait/header/275935-1630526123.png?lm=1" height = "70px" weight = "70px" alt=""/>
        Dorukhan Toköz
        </p>

        <img src = "https://img.a.transfermarkt.technology/portrait/header/616894-1663875962.png?lm=1" height = "70px" weight = "70px" alt=""/>
        <p>
        Eren Elmali:
        Left back
        </p>

        <p>
        <img src = "https://img.a.transfermarkt.technology/portrait/header/234189-1644332670.png?lm=1" height = "70px" weight = "70px" alt=""/>
        Mahmoud Trezeguet
        </p>

        <p>
        <img src = "https://img.a.transfermarkt.technology/portrait/header/203412-1668183778.jpg?lm=1" height = "70px" weight = "70px" alt=""/>
        Andreas Cornelius
        </p>

        <p>
        <img src = "https://img.a.transfermarkt.technology/portrait/header/109217-1643036892.jpeg?lm=1" height = "70px" weight = "70px" alt=""/>
        Edin Visca
        </p>

        <p>
        <img src = "https://img.a.transfermarkt.technology/portrait/header/271495-1630525402.png?lm=1" height = "70px" weight = "70px" alt=""/>
        Abdülkadir Ömür
        </p>

        <p>
        <img src = "https://img.a.transfermarkt.technology/portrait/header/162571-1630525354.png?lm=1" height = "70px" weight = "70px" alt=""/>
        Anastasios Bakasetas
        </p>

        <p>
        <img src = "https://img.a.transfermarkt.technology/portrait/medium/5078-1663860235.jpeg?lm=1" height = "70px" weight = "70px" alt=""/>
        Abdullah Avcı
        </p>

        <button onClick={() => history.push('/')}>Sign Out</button>
      </div>
    )
  }
  