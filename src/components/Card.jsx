import "./Card.css"
import React from 'react'

import kel from "../assets/kel.jpeg"

import Github from "../icons/GitHub"
import Linkedin from "../icons/Linkedin"
import Email from "../icons/Email"
import Cv from "../icons/Cv"

const Card = () => {
  return (


    <div className="container-card">

      <div className="container-card-img">
        <img src={kel} id="img" alt="Raquel"/>
      </div>
      <br />
      <div className="container-card-text">
        <h1>Maria Raquel Roriz</h1>
        <br />
        <p>FrontEnd Developer</p>
        <p>React | JS | HTML | CSS</p>
      </div>

      <div className="mt-8 flex gap-x-4 space-x-3">
         <Github />
         <Linkedin />
         <Cv />
         <Email />
         <br />
      </div>
      <br />
      <button className="btn">Portfolio</button>
      
    </div>

  )
}

export default Card
