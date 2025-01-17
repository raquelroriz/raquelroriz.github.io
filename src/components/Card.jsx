import "./Card.css"
import { Link } from "react-router-dom"
import React from 'react'

import kel from "../assets/kel.jpeg"

import Github from "../icons/GitHub"
import Linkedin from "../icons/Linkedin"
import Email from "../icons/Email"
import Cv from "../icons/Cv"
import Portfolio from "../pages/Portfolio"

const Card = () => {
  return (

    <div className="justify-center items-center w-[350px] h-[350px] border-2 border-white bg-[rgba(6,13,15,0.85)] rounded-lg relative shadow-lg p-6 pt-16 font-serif ">

      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <img src={kel} id="img" alt="Raquel" className="w-36 h-36 rounded-full border-2 border-white shadow-md"/>
      </div>


      <div className="text-center text-white mt-12">
        <h1 className="text-2xl font-bold">Maria Raquel Roriz</h1>
        <p className="text-lg font-semibold">FrontEnd Developer</p>
        <p className="text-sm text-gray-500 mt-1">React | JS | HTML | CSS</p>
      </div>

      <div className="mt-6 flex justify-center gap-4">
         <Github />
         <Linkedin />
         <Cv />
         <Email />
         <br />
      </div>
      <br />
      <Link to="/portfolio">
        <button className="btn" >
          Portfolio
        </button>
      </Link>
      
    </div>


  )
}

export default Card
