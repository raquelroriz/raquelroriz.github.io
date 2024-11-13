import "./Card.css"
import React from 'react'

import kel from "../assets/kel.jpeg"


import Github from "../icons/GitHub"
import Linkedin from "../icons/Linkedin"
import Email from "../icons/Email"
import Cv from "../icons/Cv"

const Card = () => {
  return (

    <div className="container-card relative w-80 bg-white rounded-lg shadow-lg p-6 pt-16 font-serif ">

      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <img src={kel} id="img" alt="Raquel" className="w-32 h-32 rounded-full border-2 border-white shadow-md"/>
      </div>

      <br />
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold">Maria Raquel Roriz</h1>
        <p className="text-1xl font-bold ">FrontEnd Developer</p>
        <p className="text-white text-sm/[22px] ">React | JS | HTML | CSS</p>
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
